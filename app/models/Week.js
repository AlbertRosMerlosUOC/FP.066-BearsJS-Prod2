const mongoose = require('mongoose');

const weekSchema = new mongoose.Schema({
  year: { type: String, required: true },
  desc: { type: String },
  hourIni: { type: String },
  hourEnd: { type: String },
  color: { type: String },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
});

module.exports = mongoose.model('Week', weekSchema);