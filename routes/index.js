var express = require('express');
var router = express.Router();
var github = require('./github');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.use('/payload', github);

module.exports = router;
