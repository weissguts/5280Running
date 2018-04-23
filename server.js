// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
// Sets up the Express App

// =============================================================
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./routes/race_api")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});