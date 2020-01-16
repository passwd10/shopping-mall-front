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
    type: Date,
    default: Date.now
  },
  cartList: [Number],
})

const User = mongoose.model('user', userSchema);

const user = [
  {
    userId: 'hye',
    password: "1234",
    name: '박앤서',
    phoneNum: "01012345678",
    birth: "19941007",
    cartList: [],
  },
  {
    userId: 'hye2',
    password: "1234",
    name: '박앤서2',
    phoneNum: "01012345678",
    birth: "1994-10-07",
    cartList: [],
  }
]

User.insertMany(user, onInsert);

function onInsert(err, docs) {
  if (err) {
    console.error();
  } else {
    console.log('Users were successfully stored', docs.length);
  }
}

export default User;
