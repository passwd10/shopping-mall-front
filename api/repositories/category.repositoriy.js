import Category from '../models/categorySchema';

class CategoryRepository {
  constructor() { }

  async findAll() {
    const categories = await Category.find({});
    return categories;
  };

}

export default CategoryRepository;
