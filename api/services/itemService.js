import ProductStoreRepository from '../repositories/productStore.repository';

const store = {
  items: [],
};

const product = new ProductStoreRepository();

const getItems = () => {
  return store.items;
};

const addItem = (item) => {
  return product.store(item);
}

const removeItem = (id) => {
  store.items = store.items.filter(task => task.id != id); 
  return store.items;
}

const toggleItem = (id) => {
  store.items.forEach(item => {
    if (item.id == id) {
      task.completed = !task.completed;
    }
  });
  return store.items;
};

const searchItems = async (keyword) => {
  return product.findByKeyword(keyword);
}

export {
  getItems,
  addItem,
  removeItem,
  toggleItem,
  searchItems,
};