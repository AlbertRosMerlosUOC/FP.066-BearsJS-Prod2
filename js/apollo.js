const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Definimos nuestro schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Definimos nuestros resolvers
const resolvers = {
  Query: {
    hello: () => 'Hola mundo!'
  }
};

async function startApolloServer() {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  
  await server.start();

  server.applyMiddleware({ app });

  // Iniciamos el servidor
  app.listen(4000, () => {
    console.log(`🚀 Servidor iniciado en http://localhost:4000${server.graphqlPath}`);
  });
}

startApolloServer();
