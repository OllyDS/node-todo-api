const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database servers.')
    }
    console.log('Connected to database servers successully.')
    const db = client.db('TodoApp')

    // There are several in-built methods available to you with mongo. Some examples are toArray() and count():

    db.collection('Todos').find({_id: new ObjectID('5c6ad992a100dff2b81499c2')}).toArray().then( docs => {
        console.log('Todos')
        console.log(JSON.stringify(docs, undefined, 2))
    }, error => {
        console.log('Unable to fetch Todos.', error)
    })

    db.collection('Todos').find().count().then(count => {
        console.log(`Todos count: ${count}`)
    }, error => {
        console.log('Unable to fetch Todos.', error)
    })

    db.collection('Users').find({ name: 'Jess' }).toArray().then(docs => {
        console.log('Todos')
        console.log(JSON.stringify(docs, undefined, 2))
    }, error => {
        console.log('Unable to find User.', error)
    })

    client.close()
})

