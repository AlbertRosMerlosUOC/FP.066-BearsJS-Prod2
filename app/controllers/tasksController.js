const Task = require('../models/Task');

const getTasks = async () => {
  return await Task.find();
};

const getTaskById = async (id) => {
  return await Task.findOne({ id });
};

const getTasksByWeek = async (_, { weekId }) => {
      // Buscamos la semana por su ID
      const week = await Week.findById(weekId);

      // Si la semana no existe, lanzamos un error
      if (!week) {
        throw new Error(`No se encontró una semana con el week ID ${weekId}`);
      }

      // Buscamos todas las tareas que pertenecen a la semana
      const tasks = await Task.find({ id_week: weekId });

      // Devolvemos las tareas encontradas
      return tasks;
};

module.exports = {
  getTasks,
  getTaskById,
  getTasksByWeek
};
