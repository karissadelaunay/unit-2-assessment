const Todo = require('../data/todo');

module.exports = {
    getAll,
    create
};

function getAll(req, res) {
    const todos = Todo.getAll()
    console.log(todos)
    res.render('index', {todos});
}

function create(req, res) {
    console.log(req.body, '<---show me this')
    const todos = Todo.create(req.body)
    res.render('index', {todos});
}