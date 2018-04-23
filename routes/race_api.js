// var raceArray = require("../models/race");
var request = require("request");


// request.get(options).pipe(request.put('http://localhost:8080/api/races'));
module.exports = function (app) {
    var options = { method: 'GET',
        url: 'http://api.amp.active.com/v2/search/',
        qs:
            { radius: '50',
                city: 'denver',
                current_page: '1',
                per_page: '10',
                sort: 'distance',
                topic: 'running',
                start_date: '2018-04-17..2018-12-31',
                exclude_children: 'true',
                api_key: 't773nv58p6ysdh4bvn5yavvp' },
        headers:
            { 'Postman-Token': '929d5e5d-48f5-4ae7-a15d-6933d07229ca',
                'Cache-Control': 'no-cache' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });


    app.get("/api/races", function(req, res) {
        res.json(req.body);
    });

    app.post("/api/races", function (req, res) {
        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
            res.send(body);
        });

    })
};




// ===============================================================================
// ROUTING
// ===============================================================================


