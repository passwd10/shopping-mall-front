import UserRepository from '../repositories/user.repository';

const userRepo = new UserRepository();

const isUserInUserStore = async (userId, userPasswd) => {
  const data = await userRepo.findAll();

  return data.filter(user => {
    if (userId === user.userId && userPasswd === user.password) {
      return user;
    }
  });
}

const setUserStore = (userId, updateInfo) => {
  return userRepo.setUser(userId, updateInfo);
};

const createUserList = (userInfo) => {
  return userRepo.store(userInfo)
};

export {
  isUserInUserStore,
  setUserStore,
  createUserList,
};
