import users from '../mock-data/user.json';
import products from '../mock-data/product.json';

import User from '../models/userSchema';
import Product from '../models/productSchema';

const initCollection = () => {

  User.insertMany(users, (err, docs) => {
    err ? console.error(err)
      : console.log('Users were successfully stored', docs.length);
  })

  Product.insertMany(products, (err, docs) => {
    err ? console.error(err)
      : console.log('Products were successfully stored', docs.length);
  });
}

const clearCollection = () => {
  User.deleteMany({}, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('User document cleared successfully');
    }
  });

  Product.deleteMany({}, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Product document cleared successfully');
    }
  });
}

export { initCollection, clearCollection };
