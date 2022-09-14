const mongoose = require('mongoose');

const paxSchema = new mongoose.Schema({
    alumni: Number,
    spouse: Number,
    familyMembers: Number,
    grandKids: Number
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
    username: String,
    participationType: {
      type: String,
      enum: ['single', 'withFamily']
    },
    pax: paxSchema,
    hotelRoom: {
      type: String,
      enum: ['required', 'notRequired']
    },
    typeOfRoom: {
      type: [String],
      enum: ['singleOccupancy', 'doubleOccupancy', 'twinShare']
    },
    checkInDate: Date,
    checkOutDate: Date,
    hotel: {
      breezeResidency: {
        type: [roomOneSchema]
      },
      hotelTamilNadu: {
        type: [roomTwoSchema]
      }
    }
  });

module.exports = mongoose.model('Accomodation', accomodationSchema);
