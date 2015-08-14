var express = require('express');
var router = express.Router();

router.post('/', function(req, res)
{
  console.log('web hook');
  res.send(200);
});

module.exports = router;
