const express = require('express');
const app = express();
const mongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

app.get('/create', (req, res) => {
    res.sendFile(__dirname + "/bunnyCreation.html")
})


app.get('/*', (req, res) => {
    res.sendFile(__dirname + "/index.html")
}) 

app.listen(1234)