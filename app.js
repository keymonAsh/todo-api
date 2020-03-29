const express = require('express')
const app = express()

app.get("/", function(req, res) {
    res.json({
        message: "Hello"
    })
})

app.listen(3000, () => console.log("Server LIve "))