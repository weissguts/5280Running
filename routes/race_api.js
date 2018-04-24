var raceArray = require("../models/race");

// request.get(options).pipe(request.put('http://localhost:8080/api/races'));
module.exports = function (app) {
    app.get("/api/races", function(req, res) {
        res.json(raceArray);
    });
};


