var express = require('express');
var router = express.Router();
var config = require("config");
var http = require('http');

var findtypes = {};

router.get('/api/mnProclamation/findTypes', function(req, res) {
    queryfindtypes();
    if(findtypes.code) {
        res.send(findtypes);
    } else {
        queryfindtypes();
    }
});

function queryfindtypes() {
    var options = {
        host: config.get("host") + config.get("_newstype"),
        port: config.get("port"),
        method: 'GET'
    }

    http.get(options.host, function(req, res) {

        var _data = '';

        req.on('data', function(data) {
            _data += data;
        });

        req.on('end', function() {
            findtypes = JSON.parse(_data);
        });

        req.on('error', function(e) {
            console.log("newstype: " + e.message);
        });
    });
}

module.exports = router;