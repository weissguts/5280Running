var request = require("request");
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
        { 'Postman-Token': '380a9349-1215-489e-ac37-729da5c3b53f',
            'Cache-Control': 'no-cache' }, json: true };

var raceArray = [];
request(options, function (error, response, body) {
    if (error) throw new Error(error);

    raceArray.push(body);
    console.log(body.results);
});

module.exports = raceArray;
