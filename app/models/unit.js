const mongoose = require('mongoose')

const unitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  Element: {
    type: String,
    required: true
  },
  Rarity: {
    type: String,
    required: true
  },
  Region: {
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
