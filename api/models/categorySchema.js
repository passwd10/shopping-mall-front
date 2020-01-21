import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categoryId: Number,
  categoryName: String,
})

const Category = mongoose.model('category', categorySchema);

export default Category;
