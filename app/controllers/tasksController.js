const Week = require('../models/Week');
const Task = require('../models/Task');

const getTasks = async () => {
  return await Task.find();
};

const getTaskById = async (id_task) => {
  return await Task.findById({ id_task });
};

const getTasksByWeek = async (_, { id_week }) => {
  // Buscamos la semana por su ID
  const week = await Week.findById(id_week);

  // Si la semana no existe, lanzamos un error
  if (!week) {
    throw new Error(`No se encontró una semana con el week ID ${id_week}`);
  }

  // Buscamos todas las tareas que pertenecen a la semana
  // const tasks = await Task.find({ id_week: id_week });
  const tasks = await Task.find({ id_week });

  // Devolvemos las tareas encontradas
  return tasks;
};

const getTasksByW = async (req, res) => {
  const weekId = req.params.id_week;
  try {
    const tasks = await Task.findById({ weekId });
    res.json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al buscar las tareas');
  }
}

module.exports = {
  getTasks,
  getTaskById,
  getTasksByWeek,
  getTasksByW
};
