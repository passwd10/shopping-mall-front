import User from '../models/userSchema';

class UserRepository {
  constructor(){}

  // async store(data) {

  // }

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
