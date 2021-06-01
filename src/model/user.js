const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Must have a username']
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    required: true
  },
  pillars: {
    type: [{
      goals: [{
        name: {
          type: String,
          required: [true, 'A goal must have a name']
        },
        completed: {
          type: Boolean,
          default: false
        }
      }],
      evaluations: [{
        score: {
          type: Number,
          required: [true, 'An evaluation must have a score']
        },
        created: {
          type: Date,
          default: Date.now()
        }
      }
      ]
    }]
  }
});
