const express = require('express')
const app = express()
const todos = require('./routes/todos')

app.use(express.json())
app.use('/api/todos', todos)

app.listen(3000, () => console.log("Server LIve "))