// BRING IN YOUR SCHEMAS & MODELS
require('../models/user_model');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var raceArray = require("../models/race_model");


module.exports = function (app) {
    app.get("/api/races", function(req, res) {
        res.send(raceArray);
    });


};


