import CategoryRepository from '../repositories/category.repositoriy';

const category = new CategoryRepository();

const getCategories = async () => {
  return await category.findAll();
};

export {
  getCategories,
};