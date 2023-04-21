const Weeks = require("../models/modelWeek");
const Tasks = require("../models/modelTask");

const resolvers = {
  Query: {
    weeks: async () => {
      return await Weeks.find();
    },
    week: async (_, { id }) => {
      return await Weeks.findOne({ id });
    },
    tasks: async () => {
      return await Tasks.find();
    },
    task: async (_, { id }) => {
      return await Tasks.findOne({ id });
    },
  },
  Task: {
    id_week: async (parent) => {
      return await Weeks.findOne({ _id: parent.id_week });
    },
  },
};

module.exports = resolvers;
