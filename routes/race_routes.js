var raceArray = require("../models/race_model");

// request.get(options).pipe(request.put('http://localhost:8080/api/races'));
module.exports = function (app) {
    app.get("/api/races", function(req, res) {
        res.send(raceArray);
    });
};


