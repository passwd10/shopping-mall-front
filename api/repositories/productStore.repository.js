import Product from '../models/productSchema';

const DEFAULT_IMAGE = '/../img/cantfind.jpg';

class ProductStoreRepository {
  constructor() { }

  async store(product) {
    const length = await Product.collection.countDocuments();
    return await Product.create({
      ...product,
      id: length + 1,
      img: DEFAULT_IMAGE,
    })
  }

  async findById(id) {
    return await Product.find({
      id: id,
    });
  }

  async findByKeyword(keyword) {
    const products = await Product.find({});
    return products.filter(product => product.title.includes(keyword));
  }

  async findAll() {
    return await Product.find({});
  };

}

export default ProductStoreRepository;
