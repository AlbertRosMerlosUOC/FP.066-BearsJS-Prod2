const { gql } = require("apollo-server");
const config = gql`
  type Week {
    _id: String
    titulo: String
    descripcion: String
    color: String
  }
  type Task {
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
module.exports = { config };
