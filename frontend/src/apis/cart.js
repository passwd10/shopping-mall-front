import axios from 'axios';

const CARTLIST = 'http://localhost:8080/cartList';

const getCartList = async () => {
    const { data } = await axios.get(CARTLIST);
    return data;
};

const addCartList = async (productId) => {
    const { data } = await axios.post(CARTLIST, { productId });
    return data;
}

const deleteCartList = async (productId) => {
    const { data } = await axios.delete(CARTLIST, { data: { productId: productId } });
    return data;
}

export { getCartList, addCartList, deleteCartList };