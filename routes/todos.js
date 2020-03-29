const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', function(req, res) {
    db.Todo.find()
    .then(function(todos) {
        res.json(todos)
    })
    .catch(function(err) {
        res.json(err)
    })
})



module.exports = router