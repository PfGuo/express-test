var express = require('express');
var router = express.Router();
var config = require("config");
var http = require('http');
var querystring = require('querystring');

var newslist = {};

var reqparams = {};

router.post('/', function(req, res) {
    getnewslist(req.body);
    if(newslist.code) {
        res.send(newslist);
    } else {
        getnewslist(req.body);
    }
});

function getnewslist(params) {
    var options = {
        host: config.get("host") + config.get("_newslist"),
        port: config.get("port"),
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    };

    http.request(options, function(req, res) {
        var _data = '';

        req.on("data", function(data) {
            _data += data;
        });

        req.on("end", function() {
            newslist = JSON.parse(_data);
        });

        req.on('error', function(e) {
            console.log("newslist: " + e.message);
        });

        req.write(querystring.stringify(params));
    });
}

module.exports = router;