const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  id: Number,
  id_week: { type: mongoose.Schema.Types.ObjectId, ref: 'Week' },
  name: { type: String, required: true },
  description: { type: String, required: true },
  hour_ini: String,
  hour_end: String,
  type: { type: String, required: true },
  user: String,
  in_day: String,
  finished: { type: Boolean, required: true },
});

const Tasks = mongoose.model("Tasks", taskSchema);

module.exports = Tasks;
