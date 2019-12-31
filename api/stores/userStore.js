const userList = {

    _userList: [
        { 'userId': 'hi', 'password': '123', 'name': '박인서', 'phoneNum': '01012342345', 'birth': '20010101', 'cartListId': 0, },
        { 'userId': 'hii', 'password': '123', 'name': '이태원', 'phoneNum': '01090908778', 'birth': '19911101', 'cartListId': 0, },
    ],

    get userLists() {
        return this._userList;
    },

    setUserCartListId(userId, cartListId) {
        return this._userList.map(v => v.userId === userId ? v.cartListId = cartListId : null ) ; 
    },

    createUserList({ userId, password, name, phoneNum, birth }) {
        this._userList = [
            ...this._userList,
            {
                userId,
                password,
                name,
                phoneNum,
                birth,
                cartListId : 0,
            }
        ]
    },
}

module.exports = {
    userList,
}