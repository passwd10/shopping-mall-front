import axios from 'axios';

const PRODUCT_STORE = 'http://localhost:3000/productStore';
const PRODUCTS_CATEGORY = 'http://localhost:3000/Category';
const CARTLIST = 'http://localhost:3000/cartList';

const getProducts = async () => {
    const { data } = await axios.get(PRODUCT_STORE);
    return data;
};

const getCategory = async () => {
    const { data } = await axios.get(PRODUCTS_CATEGORY);
    return data;
};

const getCartList = async () => {
    const { data } = await axios.get(CARTLIST);
    return data;
};

const addTask = async (title) => {
    const { data } = await axios.post(PRODUCT_STORE, { title });
    return data;
};

export { getProducts, getCategory, getCartList, };
