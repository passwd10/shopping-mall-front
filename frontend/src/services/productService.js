import axios from 'axios';

import { API_SERVER_URL } from './config';

const URL = API_SERVER_URL + '/productStore';

const getProducts = async () => {
    const { data } = await axios.get(URL);
    return data;
};

const getProduct = async (id) => {
    const { data } = await axios.get(URL + `/${id}`);
    return data;
}

const addProduct = async (title, categoryId, categoryName, detail, img, price) => {
    const { data } = await axios.post(URL, { title, categoryId, categoryName, detail, img, price });
    return data;
}

export { getProducts, addProduct, getProduct };
