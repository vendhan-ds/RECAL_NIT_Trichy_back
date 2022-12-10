const mongoose = require('mongoose');

const paymentschema = new mongoose.Schema({
    username : String,
    PaymentStatus : Array,
    totalDue:Array,
  });

module.exports = mongoose.model('Payment', paymentschema);