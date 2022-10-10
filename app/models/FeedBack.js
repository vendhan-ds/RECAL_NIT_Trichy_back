const mongoose = require('mongoose');

const feedschema = new mongoose.Schema({
    Rating: Number,
    Comment: String,
  });

module.exports = mongoose.model('Feed', feedschema);