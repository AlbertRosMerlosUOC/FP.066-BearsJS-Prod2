const { ApolloServer, gql } = require("apollo-server");
const tasksdata = require("./data/tasks_data.json");
//const { env } = require("dotenv");
const { getTasks } = require("./config/database");
const { config } = require("./config/config");

//schema
const typeDefs = config;

const resolvers = {
  Query: {
    tasks: () => {
      return getTasks();
    },
    weeks: () => {
      return getTasks();
    },
  },
};

//Launch the server
const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: process.env.PORT || 5000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
