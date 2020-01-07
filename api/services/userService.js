const { userList } = require('../stores/userStore');

const isUserInUserStore = (userId, userPasswd) => {
    
    return userList.userLists.filter(user => {
        if (userId === user.userId && userPasswd === user.password) {
            return user;
        }
    });

}

const setUserStore = (firstUserId, userKey, userValue) => {

    return userList.userLists.map(v => v.userId === firstUserId ? v[userKey] = userValue : null);

}

const getCartId = (userId) => {
    return userList._userList.filter(v => v.userId === userId).cartId;
}

const addProductIdInCart = (userId, productId) => {
    userList._userList.filter(v => v.userId === userId);
    //Todo
}

module.exports = {
    isUserInUserStore,
    setUserStore,
    getCartId,
};