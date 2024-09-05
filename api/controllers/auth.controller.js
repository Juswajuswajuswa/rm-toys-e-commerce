import { handleMakeError } from "../middleware/handleError.js";
import User from "../models/user.models.js";
import { generateTokens } from "../utils/generateToken.js";
import { setCookies } from "../utils/setCookies.js";
// refresh token model
import RefreshToken from "../models/refreshToken.model.js";


import jwt from "jsonwebtoken"

const storeRefreshToken = async (userId, refreshToken) => {
  const token = new RefreshToken({
    userId,
    token: refreshToken
  })
  await token.save()
}

// REGISTER
export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return next(handleMakeError(400, "User already exist"));
  }

  try {
    const newUser = new User({
      email,
      username,
      password,
    });
    // authenticate
    const {accessToken, refreshToken} = generateTokens(newUser._id)
    await storeRefreshToken(newUser._id, refreshToken);

    // saving the access/refresh token cookie
    setCookies(res, accessToken, refreshToken)

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      email: newUser.email,
      username: newUser.username,
      role: newUser.role,
    });
  } catch (error) {
    next(error);
    console.log("Error in sign-up controller")
  }
};

export const signIn = async (req, res, next) => {

  const {email, password} = req.body 

  try {
    const validUser = await User.findOne({email})
    if (!validUser) return next(handleMakeError(404, "No user found!"));

    if (validUser && (await validUser.comparePassword(password))) {
      const { accessToken, refreshToken } = generateTokens(validUser._id)
      await storeRefreshToken(validUser._id, refreshToken)
      setCookies(res, accessToken, refreshToken)

      
      res.status(200).json({
        _id: validUser._id,
				name: validUser.name,
				email: validUser.email,
				role: validUser.role,
      })
      
    } else {
      next(handleMakeError(400, "Invalid Credentials"))
    }

  } catch (error) {
    next(error)
    console.log("Error in sign-in controller")
  }

};


export const signOut = async (req, res, next) => { 
  try {
    const refreshToken = req.cookies.refreshToken

    if (refreshToken) {
      const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
      await RefreshToken.deleteOne({userId: decoded.userId, token: refreshToken})
    }

    res.clearCookie("accessToken")
    res.clearCookie("refreshToken")
    res.status(200).json({message: "Logged out successfully!"})

  } catch (error) {
    next(error)
  }
}