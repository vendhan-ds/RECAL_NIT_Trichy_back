const mongoose = require('mongoose');

const regSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    
    isRegistered: {
        type: Boolean,
        required: true
    },
    paymentReport: {
        Branch: {
            type: String,
        },
        AluminiName: {
            type: String
        },
        Spouse: {
            type: Number
        },
        Family: Number,
        GrandChildren: Number,
        Total: Number,
        Room: Number,
        Participation: Number,
        Dinner: Number,
        Tshirt: Number,
        tours: Number,
        GrandTotal: Number,
        AmountPaid: Number,
        BalanceDue: Number,
    },
});

module.exports = mongoose.model('RegList', regSchema);
