var express = require('express');
var router = express.Router();

/**
 * http://localhost:3000/express/echo-code/400
 */
router.get('/:code', function (req, res, next) {
  var code = +req.params.code;
  res.status(code);
  res.send({ code });
});

/**
 * http://localhost:3000/express/echo-code?code=400
 */
router.get('/', function (req, res, next) {
  var code = +req.query.code;
  res.status(code);
  res.send({ code });
});

/**
 * http://localhost:3000/express/echo-code/400
 */
router.delete('/:code', function (req, res, next) {
  var code = +req.params.code;
  res.status(code);
  res.send({ code });
});

/**
 * http://localhost:3000/express/echo-code?code=400
 */
router.delete('/', function (req, res, next) {
  var code = +req.query.code;
  res.status(code);
  res.send({ code });
});

/**
 * http://localhost:3000/express/echo-code
 * body { code : 200 }
 */
router.post('/', function (req, res, next) {
  var code = +req.body.code;
  res.status(code);
  res.send({ code });
});

/**
 * http://localhost:3000/express/echo-code
 * body { code : 200 }
 */
router.put('/', function (req, res, next) {
  var code = +req.body.code;
  res.status(code);
  res.send({ code });
});

/**
 * http://localhost:3000/express/echo-code
 * body { code : 200 }
 */
router.patch('/', function (req, res, next) {
  var code = +req.body.code;
  res.status(code);
  res.send({ code });
});

module.exports = router;
