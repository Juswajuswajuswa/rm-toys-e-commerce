import mongoose from "mongoose";

const RefreshTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
    default: () => Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days from now
  },
});

// TTL = automatically remove expired tokens

RefreshTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const RefreshToken = mongoose.model("RefreshToken", RefreshTokenSchema);

export default RefreshToken;
