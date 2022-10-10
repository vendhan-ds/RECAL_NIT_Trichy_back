const mongoose = require('mongoose');

const feedschema = new mongoose.Schema({
    username : String,
    Rating: Number,
    Comment: String,
  });

module.exports = mongoose.model('Feed', feedschema);