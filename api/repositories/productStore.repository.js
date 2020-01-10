import { productStore } from '../stores/productStore';

class ProductStoreRepository {
  constructor()

  async store(data) {
    return await productStore.createProduct(data);
  }

  async findById(id) {
    return await productStore.getProduct(id);
  }

  async findByTitle(title) {
    return await productStore.getProductTitle(title);
  }

  async findAll() {
    return await productStore.products;
  }

}

export default ProductStoreRepository;
