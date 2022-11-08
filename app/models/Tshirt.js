const mongoose = require('mongoose');

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
        },
        sweatWickingFabric: {
          sSize: Number,
          mSize: Number,
          lSize: Number,
          xlSize: Number,
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

module.exports = mongoose.model('Tshirt', tshirtSchema);
