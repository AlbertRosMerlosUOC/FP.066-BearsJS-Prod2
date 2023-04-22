const mongoose = require("mongoose");

const weekSchema = new mongoose.Schema({
  id_week: { type: String, required: true, unique: true, },
  week: { type: Number, required: true },
  year: { type: Number, required: true },
  description: String,
  type: { type: String, required: true },
  hour_ini: String,
  hour_end: String,
  color: String,
});

const Weeks = mongoose.model("Weeks", weekSchema);

module.exports = Weeks;
