import User from '../models/userSchema';

class UserRepository {
  constructor(){}

  async store(data) {
    const { userId, password, name, phoneNum, birth } = data;

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

}

export default UserRepository;
