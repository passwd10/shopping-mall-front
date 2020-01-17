import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: Number,
  title: String,
  categoryId: Number,
  categoryName: String,
  detail: String,
  img: String,
  price: Number,
})

const Product = mongoose.model('product', productSchema);

export default Product;
