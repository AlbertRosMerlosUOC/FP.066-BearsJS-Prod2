const Week = require('../models/Week');
const Task = require('../models/Task');

const getTasks = async () => {
  return await Task.find().populate('_id_week');
};

const getTaskById = (root, args) => {
  return Task.findById(args._id).populate('_id_week').exec();
}

const getTasksByWeek = async (_, { idWeek }) => {
  const tasks = await Task.find({ _id_week: idWeek }).populate('_id_week');
  return tasks;
};

module.exports = {
  getTasks,
  getTaskById,
  getTasksByWeek,
};
