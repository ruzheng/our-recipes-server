const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cooktime: {
    type: String
    // required: true
  },
  direction: {
    type: String
    // required: true
  },
  ingredients: {
    type: String
    // required: true
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)
