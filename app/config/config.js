// const { gql } = require("apollo-server");
// const typeDefss = gql`
//   type Task {
//     id: ID!
//     titulo: String!
//     descripcion: String!
//     fecha_inicio: String
//     fecha_fin: String
//     week: String
//     Inday: String
//     user: String
//   }
//   type Week {
//     _id: String
//     titulo: String
//     descripcion: String
//     color: String
//     tasks: [Task]
//   }
//   type Query {
//     tasks: [Task]
//   }
//   type Mutation {
//     addTask(
//       idWeek: String
//       titulo: String
//       descripcion: String
//       fecha_inicio: String
//       fecha_fin: String
//       week: String
//       Inday: String
//       user: String
//     ): Task
//     addWeek(titulo: String, descripcion: String, color: String): Week
//   }
// `;
// module.exports = { typeDefss };
