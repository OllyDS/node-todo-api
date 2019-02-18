// const MongoClient = require('mongodb').MongoClient
const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database servers.')
    }
    console.log('Connected to database servers successully.')
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert Todo.', error)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    db.collection('Users').insertOne({
        name: 'Oliver',
        age: 30,
        location: 'London'
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert User', error)
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    })

    client.close()
})

