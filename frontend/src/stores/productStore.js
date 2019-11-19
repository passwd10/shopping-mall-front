import { category,product } from "../../data";

const productStore = {
    
    get products() {
        return product;
    },

    getProduct(id) {
        return this.products.find(product => product.id == id);
    },

    get categories() {
        return category;
    },

    getCategories() {
        return this.categories[0].group;
    },
};

console.log('productStore : ' + productStore);

export default productStore;