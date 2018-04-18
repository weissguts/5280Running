// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var raceArray = require("../models/race");

// console.log("Hello + " + (raceArray));

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    app.get("/api/races", function(req, res) {
        res.json(raceArray);
    });

};