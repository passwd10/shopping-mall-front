const { userList } = require('../stores/userStore');

const isUserInUserStore = (userId, userPasswd) => {
    
    const needUser = userList.userLists.filter(user => {
        if (userId === user.userId && userPasswd === user.password) {
            return user;
        }
    });

    return needUser;
}

module.exports = {
    isUserInUserStore,
};