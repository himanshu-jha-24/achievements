const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose'); //to use mongodb
const methodOverride = require('method-override'); //for making delete function

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const teamRouter = require('./routes/team'); //for teams page
const alumRouter = require('./routes/alum');
const resourcesRouter = require('./routes/resources');

const app = express();


//Connect to the Mongo Database using Mongoose library
mongoose.connect('mongodb://localhost/amciitbhu',
{ useNewUrlParser: true , useUnifiedTopology: true });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false})); //to access database from our form
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/team',teamRouter);
app.use('/alum',alumRouter);
app.use('/resources',resourcesRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
