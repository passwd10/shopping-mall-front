import { userList } from '../stores/userStore';
import { productStore } from '../stores/productStore';

const addCartList = (userId, productId) => {

  const addProduct = productStore._product.filter(v => productId == v.id);
  const isPurchase = { 'purchase': true };

  Object.assign(addProduct[0], isPurchase);

  userList
    ._userList
    .forEach(v => userId == v.userId &&
      (v.cartList = [...new Set([...v.cartList, ...addProduct])]));

  return userList._userList.filter(v => v.userId == userId);
};

const deleteCartList = (userId, productId) => {

  userList
    ._userList
    .forEach(v => userId == v.userId &&
      (v.cartList = v.cartList.filter(e => e.id != productId)));

  return userList._userList.filter(v => userId == v.userId)[0];
}

export { addCartList, deleteCartList };
