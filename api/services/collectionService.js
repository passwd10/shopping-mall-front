import users from '../mock-data/user.json';
import products from '../mock-data/product.json';
import categories from '../mock-data/category.json';

import User from '../models/userSchema';
import Product from '../models/productSchema';
import Category from '../models/categorySchema';

const clearCollection = async () => {
  await Category.deleteMany({}, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Category document cleared successfully');
    }
  });

  await User.deleteMany({}, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('User document cleared successfully');
    }
  });

  await Product.deleteMany({}, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Product document cleared successfully');
    }
  });
}

const initCollection = async () => {

  await User.insertMany(users, (err, docs) => {
    err ? console.error(err)
      : console.log('Users were successfully stored', docs.length);
  })

  await Product.insertMany(products, (err, docs) => {
    err ? console.error(err)
      : console.log('Products were successfully stored', docs.length);
  });

  await Category.insertMany(categories, (err, docs) => {
    err ? console.error(err)
      : console.log('Categories were successfully stored', docs.length);
  });
}

export { initCollection, clearCollection };
