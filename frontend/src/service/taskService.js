import {
    getProducts as apiGetProducts,
    getCategory as apiGetCategory,
    getCartList as apiGetCartList,
    getProductImg as apiGetProductImg,
    addProduct as apiAddProduct,
} from '../apis/task';

const getProducts = async () => {
    try {
        return await apiGetProducts();
    } catch(e) {
        console.error(e);
    }
}

const addProduct = async (title, categoryId, categoryName, detail, img, price) => {
    try {
        return await apiAddProduct(title, categoryId, categoryName, detail, img, price)
    } catch (e) {
        console.error(e);
    }
}

const getProductImg = async (imgTitle) => {
    try {
        return await apiGetProducts(imgTitle);
    } catch (e) {
        console.error(e);
    }
}

const getCategory = async () => {
    try {
        return await apiGetCategory();
    } catch (e) {
        console.error(e);
    }
}

const getCartList = async () => {
    try {
        return await apiGetCartList();
    } catch (e) {
        console.error(e);
    }
}

export { getProducts, getCategory, getCartList, addProduct };