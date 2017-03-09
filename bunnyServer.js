const express = require('express');
const app = express();
const mongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

const url = 'mongodb://localhost:27017/test';

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/selectbunny/:username', (req, res) => {
    let username = req.params.username
    mongoClient.connect(url, (err, db) => {
        findAllUserBunnies(db, (docs) => {
            res.send(docs);
            db.close();
        }, username)
    });
})

app.get('/*', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(1234)

function findAllUserBunnies(db, callback, username) {
    let collection = db.collection('bunnys');
    collection.find({ name: username }).toArray(function (err, docs) {
        callback(docs);
    });
}