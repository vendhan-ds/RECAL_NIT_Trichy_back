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

const baseSchema = new mongoose.Schema({
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
  alumni: {
    type: Number,
    default: 1
  },
  spouse: {
    type: Number
  },
  familyMembers: {
    type: Number
  },
  grandKids: {
    type: Number
  }
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
  participationType: {
    type: String,
    enum: ['single', 'withFamily']
  },
  pax: {
    type: paxSchema
  },
  hotelRoom: {
    type: String,
    enum: ['required', 'notRequired']
  },
  typeOfRoom: {
    type: [String],
    enum: ['singleOccupancy', 'doubleOccupancy', 'twinShare']
  },
  checkInDate: {
    type: Date
  },
  checkOutDate: {
    type: Date
  },
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
  Date1: {
    cond1: {
      type: Boolean
    },
    cond2: {
      type: Boolean
    },
    cond3: {
      type: Boolean
    },
    count: {
      veg: {
        type: Number
      },
      nonveg: {
        type: Number
      }
    }
  },
  Date2: {
    cond1: {
      type: Boolean
    },
    cond2: {
      type: Boolean
    },
    count: {
      type: Number
    }
  },
  Date3: {
    cond1: {
      type: Boolean
    },
    cond2: {
      type: Boolean
    },
    cond3: {
      type: Boolean
    },
    count: {
      veg: {
        type: Number
      },
      nonveg: {
        type: Number
      }
    }
  }
});

const tshirtSchema = new mongoose.Schema({
  isInterested: {
    type: Boolean
  },
  menOption: {
    supimaCotton: {
      type: Boolean
    },
    sweatWickingFabric: {
      type: Boolean
    }
  },
  womenOption: {
    supimaCotton: {
      type: Boolean
    },
    sweatWickingFabric: {
      type: Boolean
    }
  },
  grandKidsOption: {
    supimaCotton: {
      type: Boolean
    }
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
  },
  base: baseSchema,
  accomodation: accomodationSchema,
  event: eventSchema,
  tshirt: tshirtSchema,
  tour: tourSchema
});

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
'/register',
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

server.use('/api', apiRouter);
server.use(express.static('public'));

server.get('*', (req, res) => {
    res.render('index');
})

server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);
});
