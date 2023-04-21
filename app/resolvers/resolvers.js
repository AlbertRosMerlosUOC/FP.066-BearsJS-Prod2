// Importar los controladores
const weeksController = require('../controllers/weeksController');
const tasksController = require('../controllers/tasksController');

// Crear el objeto resolvers
const resolvers = {
  Query: {
    // Resolver para obtener todas las semanas
    getWeeks: weeksController.getWeeks,

    // Resolver para obtener una semana por id
    getWeekById: weeksController.getWeekById,

    // Resolver para obtener todas las tareas
    getTasks: tasksController.getTasks,

    // Resolver para obtener una tarea por id
    getTaskById: tasksController.getTaskById,

    // Resolver para obtener todas las tareas dada una semana
    getTasksByWeek: tasksController.getTasksByWeek,
  }
};

// Exportar el objeto resolvers
module.exports = resolvers;
