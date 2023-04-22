const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  id_task: { type: String, required: true, unique: true, },
  id_week: { type: mongoose.Schema.Types.ObjectId, ref: 'Week', required: true, },
  // id_week: { type: String, required: true, unique: false, },
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
