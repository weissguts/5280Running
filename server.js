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
require("./models/db");
require("./config/passport");
require("./routes/race_routes")(app);


app.use(express.static('./client/dist'));
app.use(passport.initialize());

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});