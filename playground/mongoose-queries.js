const { ObjectID } = require('mongodb')
const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo')
const { User } = require('../server/models/user')


User.findById('5c6b0c2df0dff6800a617fce').then(user => {
    if (!user) {
        return console.log('User not found.')
    } else {
        return console.log('User Info:\n', JSON.stringify(user, undefined, 2))
    }
}).catch(error => console.log('Error Details:\n', error))


const id = '5c6b07df662e817f79d10223'

if (!ObjectID.isValid(id)) {
    console.log('ID not valid')
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos)
})

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo)
})

// Using .catch to handle errors
Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('ID not found!')
    } else {
        return console.log('Todo by ID', todo)
    }
}).catch(error => console.log(error))

// To find SVGPathSegMovetoRel, visit mongoose site --> queries