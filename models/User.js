var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstName: String,
  
  username: String,
  email: String,
  phone: String,
  education: String,
  fullname: String,
  password: String,
  role: String,
  card: Number,
  sex: String,
  teamName: String,
  teamID: String,
  file: {
    type: [Object],
    default: []
  }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
