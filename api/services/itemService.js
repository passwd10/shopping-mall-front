import { productStore } from '../stores/productStore';

const store = {
  items: [],
};

const getItems = () => {
  return store.items;
};

const addItem = ({title, categoryId, categoryName, detail, img, price}) => {
  productStore.createProduct({
    title,
    categoryId,
    categoryName,
    detail,
    img,
    price,
  })

  return store.items;
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

const searchItems = (keyword) => {
  return productStore._product.filter(product => product.title.indexOf(keyword) != -1);
}

export {
  getItems,
  addItem,
  removeItem,
  toggleItem,
  searchItems,
};