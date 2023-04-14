const Week = require('../models/Week');

exports.getWeeks = async (req, res) => {
  try {
    const weeks = await Week.find();
    res.status(200).json(weeks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getWeekById = async (req, res) => {
  try {
    const week = await Week.findById(req.params.id);
    if (!week) throw new Error('Week not found');
    res.status(200).json(week);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
module.exports = {
  getAllWeeks,
  getWeekById,
};


/* const Week = require('../models/Week');

module.exports = {
  week: async ({ _id }) => {
    return await Week.findById(_id).populate('tasks');
  },
  allWeeks: async () => {
    return await Week.find().populate('tasks');
  }
}; */