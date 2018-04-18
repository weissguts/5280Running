var request = require("request");
var fs = require("fs");

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
        { 'Postman-Token': '6a3004cf-0656-4321-a1cc-816af38a7815',
            'Cache-Control': 'no-cache' }, json: true };



let fileStream = fs.createWriteStream('./models/races.json');
request(options).pipe(fileStream);



