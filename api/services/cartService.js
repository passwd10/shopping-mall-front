import { userList } from '../stores/userStore';

import UserRepository from '../repositories/user.repository';
import ProductStoreRepository from '../repositories/productStore.repository';

const userRepo = new UserRepository();
const productRepo = new ProductStoreRepository();

const addCartList = async (userId, productId) => {

  const productToAdd = await productRepo.findById(productId);
  const cartList = { productId: productToAdd[0].id, purchase: true }

  return userRepo.addCart(userId, cartList);
};

const deleteCartList = (userId, productId) => {

  userList
    ._userList
    .forEach(v => userId == v.userId &&
      (v.cartList = v.cartList.filter(e => e.id != productId)));

  return userList._userList.filter(v => userId == v.userId)[0];
}

export { addCartList, deleteCartList };
