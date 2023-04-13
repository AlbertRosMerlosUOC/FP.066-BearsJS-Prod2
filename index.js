const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BearsJS-Prod2', { useNewUrlParser: true, useUnifiedTopology: true });
