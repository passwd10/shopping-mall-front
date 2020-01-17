import Product from '../models/productSchema';

class ProductStoreRepository {
  constructor() { }

  async store(data) {
    const newProduct = await Product.create({})
    return newProduct;
  }

  async findByName(name) {
    await Product.find({
      name: name,
    });
  }

  async findAll() {
    const products = await Product.find({});
    return products;
  };

}

export default ProductStoreRepository;
