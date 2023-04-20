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
  type Week {
    _id: String
    titulo: String
    descripcion: String
    fecha_inicio: String
    fecha_fin: String
    week: String
    Inday: String
    user: String
  }
  type Query {
    tasks: [Task]
    weeks: [Week]
  }
`;

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
