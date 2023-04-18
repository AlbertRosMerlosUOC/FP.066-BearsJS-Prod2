const { ApolloServer, gql } = require("apollo-server");
const tasksdata = require("./data/tasks_data.json");
//const { env } = require("dotenv");
const { getTasks } = require("./config/database");

//schema
const typeDefs = gql`
  type Task {
    _id: String
    titulo: String
    descripcion: String
    color: String
  }
  type Query {
    tasks: [Task]
  }
`;

const resolvers = {
  Query: {
    tasks: () => {
      return tasksdata;
    },
  },
};

//Launch the server

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: process.env.PORT || 5000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
