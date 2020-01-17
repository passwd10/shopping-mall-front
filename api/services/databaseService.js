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

export const clearDB = () => {
  User.deleteMany({}, (err) => {
    if(err) {
      console.error(err);
    } else {
      console.log('DB cleared successfully');
    }
  });
}

export default initDB;
