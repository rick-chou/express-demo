var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fileUploadRouter = require('./routes/file-upload');
var echoCodeRouter = require('./routes/echo-code');

var app = express();

var PREFIX = `/express`;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(`${PREFIX}/static`, express.static(path.join(__dirname, 'public')));
app.use(`${PREFIX}/uploads`, express.static(path.join(__dirname, 'uploads')));

app.use(PREFIX, indexRouter);
app.use(`${PREFIX}/users`, usersRouter);
app.use(`${PREFIX}/file-upload`, fileUploadRouter);
app.use(`${PREFIX}/echo-code`, echoCodeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
