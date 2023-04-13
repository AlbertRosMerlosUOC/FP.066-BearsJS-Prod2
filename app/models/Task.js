//Tasks

const mongoose = require('mongoose'); //Llamada a mongoose
const Schema = mongoose.Schema;      //Creación del Schema

const TaskSchema =  new Schema ({
    titulo : String,
    descripcion : String,
    fecha_inicio : {type : Date, default : Date.now},
    fecha_fin : {type : Date},
    estado : Boolean,
    task : {type: mongoose.Types.ObjectId, ref:"Task"},
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;