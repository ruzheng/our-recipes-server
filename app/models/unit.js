const mongoose = require('mongoose')

const unitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  element: {
    type: String,
    required: true
  },
  rarity: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Unit', unitSchema)
