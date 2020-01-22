import UserRepository from '../repositories/user.repository';
import ProductStoreRepository from '../repositories/productStore.repository';

const userRepo = new UserRepository();
const productRepo = new ProductStoreRepository();

const addCartList = async (userId, productId) => {

  const productToAdd = await productRepo.findById(productId);
  const cartList = { productId: productToAdd[0].id, purchase: true };

  return userRepo.addCart(userId, cartList);
};

const deleteCartList = async (userId, productId) => {

  const productToDelete = await productRepo.findById(productId);
  const cartList = { productId: productToDelete[0].id, purchase: true};
  
  return userRepo.deleteOneInCart(userId, cartList);
}

export { addCartList, deleteCartList };
