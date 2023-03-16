const routes = require("express").Router();
const taskController = require("../controller/task.controller");
const Task = require("../models/Task");

routes.get("/", taskController.getAllTasks);
routes.post("/create", taskController.createTask);
routes.get("/getId/:id", taskController.getById);
routes.put("/update/:id", taskController.updateTask);
routes.delete("/:id", taskController.deleteTask);

module.exports = routes;
