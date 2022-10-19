const mongoose = require('mongoose');

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

module.exports = mongoose.model('Event', eventSchema);
