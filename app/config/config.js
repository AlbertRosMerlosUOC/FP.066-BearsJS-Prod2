const { gql } = require('apollo-server');

const typeDefs = gql`
  type Week {
    id: Int
    week: Int!
    year: Int!
    description: String
    type: String!
    hour_ini: String
    hour_end: String
    color: String
  }

  type Task {
    id: Int
    id_week: Week!
    name: String!
    description: String!
    hour_ini: String
    hour_end: String
    type: String!
    user: String
    in_day: String
    finished: Boolean!
  }

  type Query {
    weeks: [Week]
    week(id: Int!): Week
    tasks: [Task]
    task(id: Int!): Task
  }
`;

module.exports = typeDefs;
