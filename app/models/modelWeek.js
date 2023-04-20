const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  id: Number,
  titulo: String,
  week: { type: Number, required: true },
  user: { type: String, required: true },
  description: String,
  type: { type: String, required: true },
  hour_ini: String,
  hour_end: String,
});

const Weeks = mongoose.model("Weeks", Schema);

module.exports = Weeks;
