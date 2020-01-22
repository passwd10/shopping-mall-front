import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  name: String,
  phoneNum: {
    type: Number,
    min: 11
  },
  birth: {
    type: Number
  },
  cartList: [Object],
})

const User = mongoose.model('user', userSchema);

export default User;
