const TodoItem = require("../models/TodoItem");

exports.createTodoItem = async (req, res, next) => {
  console.log(req.body);
  const { task, date } = req.body;
  const todoItem = new TodoItem({ task, date });
  await todoItem.save();
  res.status(201).json(todoItem);
}

exports.getTodoItem = async (req, res, next) => {
  const todoItems = await TodoItem.find();
  res.json(todoItems);
}

exports.deleteItem = async (req, res, next) => {
  const {id} = req.params;
  await TodoItem.findByIdAndDelete(id);
  res.status(204).json({id : _id});
}

exports.markCompleted = async (req, res, send) => {
  const {id} = req.params;
  const markItem = await TodoItem.findById(id);
  markItem.completed = true;
  await TodoItem.save();
  res.json(markItem);
}