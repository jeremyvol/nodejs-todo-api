const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db
    //     .collection('Todos') // collection
    //     // .find({ completed: false }) // condition
    //     .find({ _id: new ObjectID('5ac6413f0c3110ebaa1065d0') }) // condition
    //     .toArray()
    //     .then(docs => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     })
    //     .catch(err => console.log('Unable to fetch todos', err));

    // db
    //     .collection('Todos') // collection
    //     .find()
    //     .count()
    //     .then(count => {
    //         console.log(`Todos count: ${count}`);
    //     })
    //     .catch(err => console.log('Unable to fetch todos', err));

    db
        .collection('Users') // collection
        .find({
            name: "Mike"
        }) // condition
        .toArray()
        .then(docs => {
            console.log('Users');
            console.log(JSON.stringify(docs, undefined, 2));
        })
        .catch(err => console.log('Unable to fetch users', err));

    // client.close();
});