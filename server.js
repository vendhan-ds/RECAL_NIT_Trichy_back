import config from './config';
import apiRouter from './api';

import express from 'express';
import { number } from 'prop-types';
const server = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const registrationSchema = new mongoose.Schema({
  username: String,
  name: String,
  branch: String,
  spouse: String,
  city: String,
  country: String,
  region: String,
  mobile: String,
  email: String,
  tshirt: String
});

const paxSchema = new mongoose.Schema({
  alumni: Number,
  spouse: Number,
  familyMembers: Number,
  grandKids: Number
});

const roomOneSchema = new mongoose.Schema({
  roomType: {
    type: String,
    enum: ['standard', 'executive', 'deluxe', 'luxurySuite', 'grandSuite']
  },
  roomOccupancy: {
    type: String,
    enum: ['singleOccupancy', 'doubleOccupancy', 'twinShare']
  }
});

const roomTwoSchema = new mongoose.Schema({
  roomType: {
    type: String,
    enum: ['standard', 'deluxe', 'familyRoom', 'suite', 'additionalMember']
  },
  roomOccupancy: {
    type: String,
    enum: ['singleOccupancy', 'doubleOccupancy', 'twinShare']
  }
});

const accomodationSchema = new mongoose.Schema({
  username: String,
  participationType: {
    type: String,
    enum: ['single', 'withFamily']
  },
  pax: paxSchema,
  hotelRoom: {
    type: String,
    enum: ['required', 'notRequired']
  },
  typeOfRoom: {
    type: [String],
    enum: ['singleOccupancy', 'doubleOccupancy', 'twinShare']
  },
  checkInDate: Date,
  checkOutDate: Date,
  hotel: {
    breezeResidency: {
      type: [roomOneSchema]
    },
    hotelTamilNadu: {
      type: [roomTwoSchema]
    }
  }
});

const eventSchema = new mongoose.Schema({
  username: String,
  Date1: {
    cond1: Boolean,
    cond2: Boolean,
    cond3: Boolean,
    count: {
      veg: Number,
      nonveg: Number
    }
  },
  Date2: {
    cond1: Boolean,
    cond2: Boolean,
    count: Number
  },
  Date3: {
    cond1: Boolean,
    cond2: Boolean,
    cond3: Boolean,
    count: {
      veg: Number,
      nonveg: Number
    }
  }
});

const tshirtSchema = new mongoose.Schema({
  username: String,
  isInterested: Boolean,
  menOption: {
    supimaCotton: Boolean,
    sweatWickingFabric: Boolean
  },
  womenOption: {
    supimaCotton: Boolean,
    sweatWickingFabric: Boolean
  },
  grandKidsOption: {
    supimaCotton: Boolean
  },
  quantity: {
    menQuantity: {
      supimaCotton: {
        sSize: Number,
        mSize: Number,
        lSize: Number,
        xlSize: Number,
        xxlSize: Number,
        xxxlSize: Number
      },
      sweatWickingFabric: {
        sSize: Number,
        mSize: Number,
        lSize: Number,
        xlSize: Number,
        xxlSize: Number,
        xxxlSize: Number
      }
    },
    womenQuantity: {
      supimaCotton: {
        sSize: Number,
        mSize: Number,
        lSize: Number,
        xlSize: Number
      }
    },
    grandKids: {
      girls: {
        category1: Number,
        category2: Number,
        category3: Number
      },
      boys: {
        category1: Number,
        category2: Number,
        category3: Number
      }
    }
  }
});

const tourSchema = new mongoose.Schema({
  username: String,
  isInterested: Boolean,
  paxCount: {
    trichy: Number,
    phuketKrabi: Number,
    mysoreBandipur: Number,
    belurHampi: Number
  }
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true
  }
});

const Registration = mongoose.model('Registration', registrationSchema);
const Accomodation = mongoose.model('Accomodation', accomodationSchema);
const Event = mongoose.model('Event', eventSchema);
const Tshirt = mongoose.model('Tshirt', tshirtSchema);
const Tour = mongoose.model('Tour', tourSchema);
const User = mongoose.model('User', userSchema);

server.set('view engine', 'ejs');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.get(['/',
'/login',
'/accomodation',
'/event-participation',
'/tshirt',
'/tours',
'/previews',
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
    username: "testUsername1",
    password: "testPassword1",
    isAdmin: false
  });
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
server.use(express.static('public'));

server.get('*', (req, res) => {
    res.render('index');
})

server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);
});
