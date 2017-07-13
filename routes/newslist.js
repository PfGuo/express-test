var express = require('express');
var config = require("config");

var router = express.Router();

router.get('/api/mnProclamation/list', function(req, res) {
    res.send("I am in ddd /");
});

module.exports = router;