const mongoose = require('mongoose')
const {
    Schema
} = mongoose

//creating a person 

const person = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    favoriteFoods: {
        type: [String],
    }
})

const PersonDB = mongoose.model("Person", person)

module.exports = PersonDB