const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoStore = require("connect-mongo");
const session = require("express-session");

const apiRouter = require('./api');
const config = require('./config/config.js');

import login, { passport } from './app/routes/login';

const server = express();
server.use(express.json({
  type: ['application/json', 'text/plain']
}))

// Database Connection
mongoose.connect(config.mongodb.dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log("MongoDB Connected"));

// View Engine Setup
server.set('view engine', 'ejs');

// Middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(express.static('public'));

// Models
const Accomodation = require('./app/models/Accomodation');
const Event = require('./app/models/Event');
const Registration = require('./app/models/Registration');
const Tour = require('./app/models/Tour');
const Tshirt = require('./app/models/Tshirt');
const User = require('./app/models/Users');

// Express Session
server.use(
  session({
    store: MongoStore.create({mongoUrl: config.mongodb.dbURI}),
    secret: "texy",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport Middleware
server.use(passport.authenticate('session'));
server.use(passport.initialize());
server.use(passport.session());

// Routes
server.get(['/',
'/login',
'/accomodation',
'/event-participation',
'/tshirt',
'/tours',
'/previews',
'/report',
'/report/registered',
'/report/summary',
'/report/tshirt',
'/report/participation',
'/report/totalcost',
'/report/paymentstatus',
'/report/balance',
'/test',
], (req, res) => {
    res.render('index');
});

server.get('/dbtest', (req, res) => {
  let user = new User({
    username: "testUsername2",
    password: "testPassword2",
    isAdmin: true
  });
  console.log(user);
  user.save();
  res.send("Done!");
});

server.get('/dbclear', (req, res) => {
  User.deleteMany({}).then(() => {
    res.send("Done!");
  }).catch(() => {
    res.send("Error!");
  });
});

server.use('/api', apiRouter);
server.use('/login', login);

server.get('*', (req, res) => {
    res.render('index');
})

server.listen(config.port, () => {
    console.info('Express listening on port 8080', config.port);
});
