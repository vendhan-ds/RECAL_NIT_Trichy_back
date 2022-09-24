const mongoose = require('mongoose');

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

module.exports = mongoose.model('Tour', tourSchema);
