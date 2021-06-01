const mongoose = require('mongoose');

const evaluationSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
    select: true
  },
  pillars: [
    {
      name: {
        type: String,
      },
      rating: {
        type: Number,
        default: -1,
        min: [0, 'Rating must be above 0'],
        max: [10, 'Rating must be below 10']
      }
    }
  ]
});

const Evaluation = mongoose.model('Evaluation', evaluationSchema);
module.exports = Evaluation;
