const Week = require('./models/Week');
const Task = require('./models/task');

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    week: (_, { _id }) => Week.findById(_id),
    task: (_, { _id }) => Task.findById(_id),
    allWeeks: () => Week.find(),
    allTasks: () => Task.find(),
  },
  Week: {
    tasks: (parent) => Task.find({ week: parent._id }),
  },
  Task: {
    week: (parent) => Week.findById(parent.week),
  },
};

module.exports = resolvers;