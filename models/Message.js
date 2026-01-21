const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  sender: String,
  receiver: String,
  message: String,
  image: String,
  status: {
    type: String,
    enum: ["sent", "delivered", "seen"],
    default: "sent"
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Message", MessageSchema);
