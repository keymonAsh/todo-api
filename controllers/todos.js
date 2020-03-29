const db = require('../models')

// Show All Todos
exports.getTodos = function(req, res) {
    db.Todo.find()
    .then(function(todos) {
        res.json(todos)
    })
    .catch(function(err) {
        res.json(err)
    })
}

// Create Todo
exports.createTodo = function(req, res) {
    db.Todo.create(req.body)
    .then(function(todo) {
        res.json(todo)
    })
    .catch(function(err) {
        res.json(err)
    })
}

// Show Todo by ID
exports.showTodo = function(req, res) {
    db.Todo.findById(req.params.id)
    .then(function(todo) {
        res.json(todo)
    })
    .catch(function(err) {
        res.json(err)
    })
}

// Update Todo by ID
exports.updateTodo = function(req, res) {
    db.Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(function(todo) {
        res.json(todo)
    })
    .catch(function(err) {
        res.json(err)
    })
}

// Delete Todo by ID
exports.deleteTodo = function(req, res) {
    db.Todo.findByIdAndDelete(req.params.id)
    .then(function() {
        res.json({
            message: "Deleted"
        })
    })
    .catch(function(err) {
        res.json(err)
    })
}