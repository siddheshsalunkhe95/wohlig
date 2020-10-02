const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 9000;

var bodyParser = require('body-parser');

// ROUTES
var categoryRoute = require("./routes/category.js");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// VIEW ENGINE
app.set('view engine', 'ejs');

// ROUTES MIDDLEWARE
app.use("/route/category", categoryRoute);

// CONNECTION
mongoose.connect('mongodb://127.0.0.1:27017/dashboard', { useUnifiedTopology: true, useNewUrlParser: true }, function (error, db) {
    if (error) {
        console.log("Error Is : ->>>> ", error);
    } else {
        console.log("DB Connected");
        app.listen(port, function () {
            console.log("Connected To Port " + port);
        });
    }
});

module.exports = app;
