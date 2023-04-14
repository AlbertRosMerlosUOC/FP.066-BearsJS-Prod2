const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const rootValue = {
  hello: () => 'Hello World!'
};


const app = express();
app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});



app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: rootValue,
  graphiql: true
}));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BearsJS-Prod2', { useNewUrlParser: true, useUnifiedTopology: true });