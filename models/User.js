const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  bio: String,
  avatar: String,
  lastSeen: Date,
  isOnline: Boolean,
  verified: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", UserSchema);
