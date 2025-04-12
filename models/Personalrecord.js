let goose = require('mongoose');

let PersonalSchema = goose.Schema({
    height: {
        type: Number,
        required: true
    },
    weight : {
        type: Number,
        required: true
    },
    bmi: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = goose.model('personalRecord', PersonalSchema);