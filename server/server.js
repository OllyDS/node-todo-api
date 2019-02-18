const express = require('express')
const bodyParser = require('body-parser')

const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')

const app = express()
const port = 3000

// middleware - bodyParser takes JSON and converts it into an object, attaching it on to the 'req' object.
app.use(bodyParser.json())


/*  -- CRUD Methods -- */

// Create
app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc)
    }, error => {
        res.status(400).send(error)
    })
})

// Read
app.get('/todos', (req, res) => {
    Todo.find()
        .then(todos => {
            res.send({ todos })
        }, error => {
            res.status(400).send(error)
        })
})

// Update


// Delete



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
