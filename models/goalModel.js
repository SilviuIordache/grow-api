const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, 'A goal must have at least 3 characters'],
    maxlength: [50, 'A goal must have at most 50 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: true
  },
  pillars: [{ type: String }],
  timeLimit: {
    type: Number,
    min: [1 * 24 * 60 * 60 * 1000, 'A goal must have at least 1 day timeLimit'],
    max: [
      365 * 24 * 60 * 60 * 1000,
      'A goal must have at most 1 year timeLimit'
    ],
    default: 10 * 24 * 60 * 60 * 1000 // 10 days
  }
});

const Goal = mongoose.model('Goal', goalSchema);
module.exports = Goal;
