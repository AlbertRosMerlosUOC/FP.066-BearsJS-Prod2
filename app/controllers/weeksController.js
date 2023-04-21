const Week = require('../models/Week');

const getWeeks = async () => {
  return await Week.find();
};

const getWeekById = async (id) => {
  return await Week.findOne({ id });
};

module.exports = {
  getWeeks,
  getWeekById,
};
