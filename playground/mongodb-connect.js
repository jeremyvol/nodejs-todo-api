// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// const user = { name: 'andrew', age: 25 };
// var { name } = user;
// console.log(name);

// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne(
    //     {
    //         text: 'Something to do',
    //         completed: false
    //     },
    //     (err, res) => {
    //         if (err) {
    //             return console.log('Unable to insert todo', err);
    //         }
    //         console.log(JSON.stringify(res.ops, undefined, 2));
    //     }
    // );

    // Insert new doc into Users (name, age, location)
    // db.collection('Users').insertOne(
    //     {
    //         name: 'Jeremy',
    //         age: 35,
    //         location: 'Toulouse'
    //     },
    //     (err, res) => {
    //         if (err) {
    //             return console.log('Unable to insert user', err);
    //         }
    //         console.log(
    //             JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2)
    //         );
    //     }
    // );

    client.close();
});
