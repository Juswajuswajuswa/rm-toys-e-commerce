import User from "../models/user.models.js";
import bcypt from "bcryptjs";

export const updateProfile = async (req, res, next) => {
  const id = req.params.id;

  try {
    const { username, email, password, avatar, phoneNumber } = req.body;

    const hashedPassword = await bcypt.hash(password, 10);

    const currentUser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          username,
          email,
          password: hashedPassword,
          avatar,
          phoneNumber,
        },
      },
      { new: true }
    ).select("-password")

    res.status(201).json(currentUser);
  } catch (error) {
    next(error);
    console.log("error in update profile controller");
  }
};

export const getAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    next(error);
  }
};
