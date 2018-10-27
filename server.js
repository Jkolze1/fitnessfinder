const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const dbConnection = require('../database');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const app = express();
var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var cookieParser = require('cookie-parser');

// Port
var PORT = process.env.PORT || 3000;

// Route requires
app.use(routes);

// MIDDLEWARE
app.use(morgan('dev'));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Sessions
app.use(
  session({
    secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, //required
    saveUninitialized: false //required
  })
);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fit");


// Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/user', user);

// Yelp route
//app.use('/yelp', yelp);

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
