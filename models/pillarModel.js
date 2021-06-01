const mongoose = require('mongoose');

const pillarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A pillar must have a name'],
    trim: true,
    minlength: [3, 'A pillar name must have at least 3 characters'],
    maxlength: [30, 'A pillar name must have at most 30 characters']
  },
  description: {
    type: String,
    trim: true,
    minlength: [10, 'A pillar description must have at least 10 characters'],
    maxlength: [400, 'A pillar description must have at most 400 characters']
  },
  color: {
    type: String,
    default: 'rgba(255, 255, 255)'
  },
  icon: {
    type: String
  },
  default: {
    type: Boolean,
    default: false
  }
});

const Pillar = mongoose.model('Pillar', pillarSchema);

module.exports = Pillar;
