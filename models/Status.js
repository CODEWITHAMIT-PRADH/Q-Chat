const mongoose = require("mongoose");

const StatusSchema = new mongoose.Schema({
  userId: String,
  text: String,
  image: String,
  viewers: [String],
  privacy: String,
  createdAt: { type: Date, default: Date.now, expires: 86400 }
});

module.exports = mongoose.model("Status", StatusSchema);
