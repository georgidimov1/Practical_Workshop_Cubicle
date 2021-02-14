const mongoose = require('mongoose')
const cubeSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
            maxlength: 50
        },
        imageUrl: {
            type: String,
            required: true,
            validate: /^https?/
        },
        difficultyLevel: {
            type: {Number, min: 1, max: 6},
            required: true
        },
        accessories: [{
            type: mongoose.Types.ObjectId,
            ref: 'accessory'
        }]
});


module.exports = mongoose.model('Cube', cubeSchema);