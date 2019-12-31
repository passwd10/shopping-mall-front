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

const setCartListId = (userId, newCategoryId) => {
    return userList.setUserCartListId(userId, newCategoryId);
}

module.exports = {
    isUserInUserStore,
    setCartListId,
    setUserStore,
};