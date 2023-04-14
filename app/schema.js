const { gql } = require('apollo-server-express');

const typeDefsString = `
type User {
  _id: String
  name: String
  email: String
  password: String
}

type Task {
  _id: String
  name: String 
  desc: String
  hIni: String
  hEnd: String
  user: String
  agreeInDay: String
  fini: String
  week:[Week]
}

type Week {
  _id: String
  year: String
  desc: String
  hourIni: String
  hourEnd: String
  color: String
  tasks: [Task]
}

type Query {
  hello: String

  week(_id: ID): Week
  task(_id: ID): Task

  allWeeks: [Week]
  allTasks: [Task]
}

type Mutation {
  addTask(
    idWeek: String,
    titulo: String,
    descripcion: String,
    fecha_inicio: String,
    fecha_fin: String,
    week: String,
    Inday: String,
    user: String
  ): Task
  addWeek(
    titulo: String,
    descripcion: String,
    color: String
  ): Week
}
`;

const typeDefs = gql(typeDefsString);

const { mergeTypeDefs } = require('@graphql-tools/merge');

const mergedTypeDefs = mergeTypeDefs([typeDefs, typeDefsString]);

module.exports = mergedTypeDefs;

  
/*   export const mongoDbUrl =
    "mongodb+srv://BearsJS:BearsJS@product2.v5kejnx.mongodb.net/test"; */
  