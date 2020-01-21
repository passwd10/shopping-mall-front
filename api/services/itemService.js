import ProductStoreRepository from '../repositories/productStore.repository';

const product = new ProductStoreRepository();

const getItems = () => {
  return product.findAll();
};

const getItem = (id) => {
  return product.findById(id);
};

const addItem = (item) => {
  return product.store(item);
};

const searchItems = async (keyword) => {
  return product.findByKeyword(keyword);
};

export {
  getItems,
  getItem,
  addItem,
  searchItems,
};