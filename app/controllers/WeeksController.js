import Week from './../models/Week.js';

export const weekResolver = (root, args) => {
  return Week.findById(args._id).exec()
}

export const allWeeksResolver = async (root, args) => {
  return Week.find().exec()
}

export const addWeekResolver = (root, args) => {
  const week = new Week({...args})
  return week.save()
}