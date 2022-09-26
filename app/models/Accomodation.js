const mongoose = require('mongoose');

/*const paxSchema = new mongoose.Schema({
    alumni: {Type:Number, default:0},
    spouse:  {Type:Number, Default:0},
    familyMembers: {Type:Number, Default:0},
    grandKids:  {Type:Number, Default:0}
  });*/
  
  const roomOneSchema = new mongoose.Schema({
    roomType: {
      type: String,
      enum: ['standard', 'executive', 'deluxe', 'luxurySuite', 'grandSuite'],
    },
    roomOccupancy: {
      type: String,
      enum: ['singleOccupancy', 'doubleOccupancy', 'twinShare'],
    },
    count: Number
  });
  
  const roomTwoSchema = new mongoose.Schema({
    roomType: {
      type: String,
      enum: ['standard', 'deluxe', 'familyRoom', 'suite', 'additionalMember']
    },
    roomOccupancy: {
      type: String,
      enum: ['singleOccupancy', 'doubleOccupancy', 'twinShare']
    },
    count: Number
  });
  
  const accomodationSchema = new mongoose.Schema({
    username: String,
    participationType: {
      type: String,
      enum: ['single', 'withFamily']
    },
    pax: {
    alumni: Number,
    spouse:  Number,
    familyMembers: Number,
    grandKids:  Number
  },
    hotelRoom: {
      type: String,
      enum: ['required', 'notRequired']
    },
    /*typeOfRoom: {
      type: [String],
      enum: ['singleOccupancy', 'doubleOccupancy', 'twinShare']
    },*/
    checkInDate: Date,
    checkOutDate: Date,
    hotel: {
      breezeResidency: {
        type: [roomOneSchema]
      },
      hotelTamilNadu: {
        type: [roomTwoSchema]
      }
    },
    
      hotel11:[{type:Number}],
      hotel22:[Number]
    
  });

module.exports = mongoose.model('Accomodation', accomodationSchema);
