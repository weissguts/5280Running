// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require('cors');
var path = require("path");
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var routesApi = require('./api/routes/user_routes');
// Sets up the Express App

// =============================================================
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({
    limit: '50mb',
    extended: true
}));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./api/models/db");
require("./api/config/passport");
require("./api/routes/race_routes")(app);

//===================================================================
// PASSPORT / Mongo
// ==================================================================
app.use(passport.initialize());
app.use('/api', routesApi);
// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({"message" : err.name + ": " + err.message});
    }
});

// ===================================================================
// Angular 5 Production Call
// ===================================================================
app.use(express.static('./client/dist'));


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

module.exports = app;