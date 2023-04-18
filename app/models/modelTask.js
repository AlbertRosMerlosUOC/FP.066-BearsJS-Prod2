const mongoose = require("mongoose");

//Schema
const Schema = new mongoose.Schema({
  id: Number,
  titulo: String,
  descripcion: String,
  color: String,
});

const Tasks = mongoose.model("Tasks", Schema);

module.exports = Tasks;
