const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  hIni: { type: String },
  hEnd: { type: String },
  user: { type: String },
  agreeInDay: { type: String },
  fini: { type: String },
  week: { type: mongoose.Schema.Types.ObjectId, ref: 'Week' }
});

module.exports = mongoose.model('Task', taskSchema);
