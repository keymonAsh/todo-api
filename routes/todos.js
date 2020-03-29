const express = require('express')
const router = express.Router()
const db = require('../models')

// Show All Todos
router.get('/', function(req, res) {
    db.Todo.find()
    .then(function(todos) {
        res.json(todos)
    })
    .catch(function(err) {
        res.json(err)
    })
})

// Create Todo
router.post('/', function(req, res) {
    db.Todo.create(req.body)
    .then(function(todo) {
        res.json(todo)
    })
    .catch(function(err) {
        res.json(err)
    })
})

// Show Todo by ID
router.get('/:id', function(req, res) {
    db.Todo.findById(req.params.id)
    .then(function(todo) {
        res.json(todo)
    })
    .catch(function(err) {
        res.json(err)
    })
})

// Update Todo by ID
router.put('/:id', function(req, res) {
    db.Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(function(todo) {
        res.json(todo)
    })
    .catch(function(err) {
        res.json(err)
    })
})

// Delete Todo by ID
router.delete("/:id", function(req, res) {
    db.Todo.findByIdAndDelete(req.params.id)
    .then(function() {
        res.json({
            message: "Deleted"
        })
    })
    .catch(function(err) {
        res.json(err)
    })
})

module.exports = router