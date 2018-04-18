var raceArray = require("../models/race");

// ===============================================================================
// ROUTING
// ===============================================================================


module.exports = function (app) {
    app.get("/api/races", function(req, res) {
        res.json(req.body);
    });

    app.post("/api/races", function (req, res) {
        res.send(raceArray);
    })


};