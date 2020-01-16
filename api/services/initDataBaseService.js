import users from '../mock-data/user.json';
import User from '../models/userSchema';

const initDB = () => {
  User.insertMany(users.users, (err, docs) => {
    if (err) {
      console.error();
    } else {
      console.log('Users were successfully stored', docs.length);
    }
  });
}

export default initDB;
