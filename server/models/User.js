const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: {type: String, required: true},
    isAdmin: { type: Boolean, default: false },
    OTP: { value: { type: Number }, exp: { type: Date } },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
