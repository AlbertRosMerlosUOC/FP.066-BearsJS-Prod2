export const typeDefs = `#graphql
type Task {
  _id: String
  titulo: String 
  descripcion: String
  fecha_inicio: String
  fecha_fin: Strin
  week: String
  Inday: String
  user: String
}
type Week {
  _id: String
  titulo: String
  descripcion: String
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
    user: String,
  ): Task
  addWeek(
    titulo: String,
    descripcion: String,
    color: String,
  ): Week
}
`;

export const mongoDbUrl =
  "mongodb+srv://BearsJS:BearsJS@product2.v5kejnx.mongodb.net/test";
