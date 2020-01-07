const { userList } = require('../stores/userStore');

const checkDuplicateId = userId => {
    const findDuplicateUser = userList._userList.filter(user => user.userId === userId);
    return findDuplicateUser.length === 0 ? false : true;
}

module.exports = {
    checkDuplicateId,
};