const express = require('express')
const router = express.Router()
const  {
    getTodos,
    createTodo,
    showTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todos')

router.route('/')
.get(getTodos)
.post(createTodo)

router.route('/:id')
.get(showTodo)
.put(updateTodo)
.delete(deleteTodo)

module.exports = router