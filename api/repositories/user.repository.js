import User from '../models/userSchema';

class UserRepository {
  constructor(){}

  async store(userInfo) {
    const { userId, password, name, phoneNum, birth } = userInfo;

    const newUser = await User.create({
      userId: userId,
      password: password,
      name: name,
      phoneNum: phoneNum,
      birth: birth,
      cartList: [],
    })

    return newUser;
  }

  async findByName(name) {
    await User.find({
      name: name,
    });
  }

  async findAll() {
    const users = await User.find({});
    return users;
  };

  async setUser(userId, updateInfo) {
    await User.updateOne({ userId: userId }, updateInfo);
    return User.find({
      userId: userId,
    })
  }

}

export default UserRepository;
