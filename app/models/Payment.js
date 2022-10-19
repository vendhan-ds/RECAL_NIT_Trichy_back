const mongoose = require('mongoose');

const paymentschema = new mongoose.Schema({
    username : String,
    PaymentStatus : Array,
  });

module.exports = mongoose.model('Payment', paymentschema);