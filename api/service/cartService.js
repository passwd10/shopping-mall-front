const { userList } = require('../stores/userStore');
const { productStore } = require('../stores/productStore');

const addCartList = (userId, productId) => {

    const addProduct = productStore._product.filter(v => productId == v.id);
    const isPurchase = { 'purchase': true };

    Object.assign(addProduct[0], isPurchase);

    userList._userList.forEach(v => userId == v.userId ? v.cartList = [...new Set([...v.cartList, ...addProduct])] : null);

    return userList._userList.filter(v => v.userId == userId);
};

const deleteCartList = (userId, productId) => {
    
    userList._userList.forEach(v => userId == v.userId ? v.cartList = v.cartList.filter(e => e.id != productId) : null);
    
    return userList._userList.filter(v => userId == v.userId)[0];
}

module.exports = { addCartList, deleteCartList };