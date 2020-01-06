import axios from 'axios';

import SERVER_URL from './config';

const URL = SERVER_URL + '/cartList';

const getCarts = async () => {
    const { data } = await axios.get(URL);
    return data;
};

const addCart = async (productId) => {
    const { data } = await axios.post(URL, { productId });
    return data;
}

const deleteCart = async (productId) => {
    const { data } = await axios.delete(URL, { data: { productId } });
    return data;
}

const calculatePrice = async (productId) => {
    const { data } = await axios.post(URL, { productId });
    return data;
}

export { getCarts, addCart, deleteCart, calculatePrice };