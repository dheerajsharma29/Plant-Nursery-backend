const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  email: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model("Plant", plantSchema);
