const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true 
    },
    movieLink: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date
    },
    description: {
        type: String
    },
    
})


const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie