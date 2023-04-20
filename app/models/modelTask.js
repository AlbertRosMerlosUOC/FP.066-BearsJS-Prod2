const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  id: Number,
  name: { type: String, required: true },
  description: { type: String, required: true },
  hour_ini: String,
  hour_end: String,
  type: { type: String, required: true },
  user: String,
  in_day: String,
  finished: { type: Boolean, required: true },
});

const Tasks = mongoose.model("Tasks", Schema);

module.exports = Tasks;
