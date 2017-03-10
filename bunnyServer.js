const express = require('express');
const app = express();
const mongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const path = require("path");
const url = require("url");
app.use(bodyParser.urlencoded({
    extended: true
}));

const dburl = 'mongodb://localhost:27017/test';

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get(['css/*.css', '*/js/*.js'], function (req, res) {
    res.sendFile(path.join(__dirname + url.parse(req.url).pathname));
});

app.get("/bunnyselection", (req, res) => {
    res.sendFile(__dirname + "/bunnySelection.html");
})

app.get('/bunnyselection/:username', (req, res) => {
    let username = req.params.username
    mongoClient.connect(dburl, (err, db) => {
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