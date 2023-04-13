const mongoose = require('mongoose'); // Llamada a mongoose
const Schema = mongoose.Schema ;   //Creación del Schema

const WeeksSchema = new Schema ({
    titulo : String,
    descripcion : String,
})

const Week = mongoose.model('Week', WeeksSchema);

module.exports = Week;
