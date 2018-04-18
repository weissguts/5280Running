// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const env = require('dotenv').load();

// Sets up the Express App
// =============================================================
// var app = express();
var PORT = process.env.PORT || 3000;
// Requiring our models for syncing
var db = require("./models");
require('./controllers/passport.js')(passport, db.user);
// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded


