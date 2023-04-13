import Task from './../models/Task.js';

export const taskResolver = (root, args) => {
  return Task.findById(args._id).exec()
}

export const allTasksResolver = (root, args) => {
  return Task.find().exec()
}

export const addTaskResolver = (root, args) => {
    const task = new Task({...args})
    return task.save()
}