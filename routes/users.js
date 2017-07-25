var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:username', function(req, res) {
  res.render('users', {
    name: req.params.username
  });
});

router.get('/', function(req, res) {
  res.render('index', {
    list: ['xxx', 'yyy', 'zzz']
  });
});

module.exports = router;
