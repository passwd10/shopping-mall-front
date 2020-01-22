import User from '../models/userSchema';

import _ from 'lodash';

class UserRepository {
  constructor() { }

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
  };

  async findByName(name) {
    return await User.find({
      name: name,
    });
  };

  async findById(id) {
    return await User.find({
      userId: id,
    });
  };

  async findAll() {
    const users = await User.find({});
    return users;
  };

  async setUser(userId, updateInfo) {
    await User.updateOne({ userId: userId }, updateInfo);
    return User.find({
      userId: userId,
    });
  };

  async addCart(userId, product) {
    const user = await this.findById(userId);
    const userCart = _.uniqBy([...user[0].cartList, product], 'productId');

    await User.updateOne({ userId: userId }, { cartList: userCart });
    return User.find({
      userId: userId,
    });
  };

  async deleteOneInCart(userId, product) {
    const user = await this.findById(userId);
    const userCart = _.remove(user[0].cartList, (v) => {
      return !_.isEqual(v, product);
    });

    await User.updateOne({ userId: userId }, { cartList: userCart });
    return User.find({
      userId: userId,
    });  
  }
}

export default UserRepository;
