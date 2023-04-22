const Week = require('../models/Week');
const mongoose = require("mongoose");

const getWeeks = async () => {
  return await Week.find();
};

const getWeekById = async (id_week) => {
  const id = new mongoose.Types.ObjectId(id_week);
  const week = await Week.findOne({ _id: id });
  if (!week) {
    throw new Error('Week not found');
  }
  return week;
};

// const weekResolver = async (args) => {
//   return Week.findById(args._id).exec()
// };

module.exports = {
  getWeeks,
  getWeekById,
  // panelResolver,
};
