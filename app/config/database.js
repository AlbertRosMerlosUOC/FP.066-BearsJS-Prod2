const mongoose = require("mongoose");
const Tasks = require("../models/modelTask");
const Weeks = require("../models/modelWeek");
const env = require("dotenv");

const mongoDbUrl =
  "mongodb+srv://BearsJS:BearsJS@product2.v5kejnx.mongodb.net/test";

env.config();
//DB Conection
mongoose.connect(mongoDbUrl);
// Get the default connection

const db = mongoose.connection;
const getTasks = async () => {
  try {
    const tasksmongo = await Tasks.find({});
    return tasksmongo;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = { getTasks };
