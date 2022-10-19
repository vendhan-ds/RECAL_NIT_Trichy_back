const mongoose = require('mongoose');

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

module.exports = mongoose.model('Registration', registrationSchema);
