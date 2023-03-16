const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasksList = await Task.find();
    return res.status(200).send(tasksList);
  } catch (e) {
    res.status(400).send({ err: err.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    return res.send("Erro na requisição");
  }

  try {
    await Task.create(task);
    return res.status(200).send(task);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
};
const getById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    res.status(200).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id });
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
};
const updateTask = async (req, res) => {
  try {
    const task = req.body;
    await Task.updateOne({ _id: req.params.id });
    res.status(200).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
};
 export const updateCheck = async (req, res) => {
  try {
    const task = await Task.findOne({_id: req.params.id});
    if (task.check) {
      task.check = false;
  } else {
      task.check = true;
  }

    await Task.updateOne({ _id: req.params.id, task });
    res.status(200).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getById,
  updateTask,
  deleteTask,
  updateCheck,
};
