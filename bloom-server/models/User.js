const mongoose = require('mongoose');

/*
* Can add any field you want: email, fullName, avatarUrl etc.
*/
const User = mongoose.model('User', {
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports.User = User;
