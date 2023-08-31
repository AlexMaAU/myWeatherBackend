const { Schema, model } = require('mongoose');

const schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = model('User', schema);

module.exports = UserModel;
