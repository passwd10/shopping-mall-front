import { userList } from '../stores/userStore';

const isUserInUserStore = (userId, userPasswd) => userList.userLists.filter(user => {
      if (userId === user.userId && userPasswd === user.password) {
        return user;
      }
    });

const setUserStore = (firstUserId, userKey, userValue) => userList.userLists
      .map(v => v.userId === firstUserId ? v[userKey] = userValue : null);

const getCartId = (userId) => userList._userList
      .filter(v => v.userId === userId).cartId;

const createUserList = ({ userId, password, name, phoneNum, birth }) => { userList._userList =
  [
    ...userList._userList,
    {
      userId,
      password,
      name,
      phoneNum,
      birth,
      cartList: [],
    }
  ]
  return userList._userList.filter(v => v.userId === userId)[0].userId;
};

export {
  isUserInUserStore,
  setUserStore,
  getCartId,
  createUserList,
};