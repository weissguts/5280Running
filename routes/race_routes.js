var raceArray = require("../models/race_model");


module.exports = function (app) {
    app.get("/api/races", function(req, res) {
        res.send(raceArray);
    });
};


