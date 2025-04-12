let goose = require('mongoose');

let HealthSchema = goose.Schema({
    sugar: {
        type: Number,
        required: true
    },
    heart_rate : {
        type: Number,
        required: true
    },
    bp: {
        type: Number,
        required: true
    },
    colestrol: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = goose.model('healthInfo', HealthSchema);