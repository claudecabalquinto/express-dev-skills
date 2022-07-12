const skill = require('../models/skill');

module.exports = {
  index,
  show
};

function show(req, res) {
  // Get the todo for the id that is passed as a route param
  // All route params are accessed via the req.params object
  // console.log(req.params)
  const skill = skill.getOne(req.params.id);
  res.render('todos/show', { skill });
}

function index(req, res) {
  // Obtain the array of todos from the Todo model
  const todos = skill.getAll();
  res.render('skill/index', { skill });
}