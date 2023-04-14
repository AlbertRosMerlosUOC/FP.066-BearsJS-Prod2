/* const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) throw new Error('Task not found');
    res.status(200).json(task);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
}; */

const Task = require('./models/Task');

module.exports = {
  task: async ({ _id }) => {
    return await Task.findById(_id).populate('week');
  },
  allTasks: async () => {
    return await Task.find().populate('week');
  }
};