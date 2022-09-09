const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  email:{ // email
    type: String,
    required: true,
  }, 
  name:{ // 가족 ID
    type: String
  },
  age: {  // 나이
    type: Number
  },
  mbti: { // mbti
    type: String
  }
})


const User = mongoose.model('User', userSchema)
module.exports = { User }