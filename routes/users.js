var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var userList = [{ name: 'rick', age: 18 }];
  res.send(userList);
});

module.exports = router;
