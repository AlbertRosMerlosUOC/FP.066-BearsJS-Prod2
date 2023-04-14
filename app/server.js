const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const Week = require('./models/Week');
//const Task = require('./models/Task');

const app = express();

// Configuración de la base de datos con Mongoose
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware de GraphQL
const schema = makeExecutableSchema({ typeDefs, resolvers });
app.use(bodyParser.json());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

// Inicio del servidor
app.listen(4000, () => {
  console.log('Servidor GraphQL escuchando en el puerto 4000...');
});