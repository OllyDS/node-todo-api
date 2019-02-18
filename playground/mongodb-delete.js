const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database servers.')
    }
    console.log('Connected to database servers successully.')
    const db = client.db('TodoApp')

    // deleteMany
    // db.collection('Todos').deleteMany({ text: 'Something to do' })
    //     .then(result => console.log(result))

    // deleteOne
    // db.collection('Todos').deleteOne({ text: 'Something to do' })
    //     .then(result => console.log(result))

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ _id: new ObjectID("5c6ae407a100dff2b8149bfb") })
    //     .then(result => console.log(result))

    // db.collection('Users').findOneAndDelete({ name: 'Jess' })
    //     .then(response => console.log(response))

    client.close()
})

