const moongose = require("mongoose")


const CountryModel = new moongose.Schema({
    position:{
        type: Number,
        required: true,
        trim: true,
        maxLength: 3
    },
    country:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    song:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    points:{
        type: Number,
        required: true,
        trim: true,
        maxLength: 10
    },
    position2023:{
        type:String,
        required: true,
        trim: true,
        maxLength: 10
    }
}, {timestamps: true})


module.exports = moongose.model("CountryModel", CountryModel)