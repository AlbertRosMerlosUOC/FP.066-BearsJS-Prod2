const { gql } = require('apollo-server');

const typeDefs = gql`
  type Week {
    id: Int!
    week: Int!
    year: Int!
    description: String
    type: String!
    hour_ini: String
    hour_end: String
    color: String
    tasks: [Task!]!
  }

  type Task {
    id: Int!
    week: Week!
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
    getWeekById(id: Int!): Week
    getWeeks: [Week!]!
    getTaskById(id: Int!): Task
    getTasks: [Task!]!
    getTasksByWeek(week: Int!): [Task!]!
  }
`;

module.exports = typeDefs;
