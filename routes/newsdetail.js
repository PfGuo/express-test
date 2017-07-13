var express = require('express');
var config = require("config");

var router = express.Router();

router.get('/api/mnProclamation/view', function(req, res) {
    res.send("I am in user /");
});

module.exports = router;