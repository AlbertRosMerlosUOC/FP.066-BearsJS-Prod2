const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  id: Number,
  week: {type: Number, required: true},
  year: {type: Number, required: true},
  description: String,
  type: {type: String, required: true},
  hour_ini: String,
  hour_end: String,
  color: String
});

const Weeks = mongoose.model("Weeks", Schema);

module.exports = Weeks;
