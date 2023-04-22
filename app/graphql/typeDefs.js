const { gql } = require('apollo-server');

const typeDefs = gql`
  type Week {
    id_week: ID!
    week: Int!
    year: Int!
    description: String
    type: String!
    hour_ini: String
    hour_end: String
    color: String
  }

  type Task {
    id_task: ID!
    id_week: ID!
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
    getWeekById(id_week: ID!): Week!
    getWeeks: [Week]
    getTaskById(id_task: ID!): Task!
    getTasks: [Task]
    getTasksByWeek(id_week: ID!): [Task!]!
    getTasksByW(id_week: ID!): [Task]
  }
`;

module.exports = typeDefs;