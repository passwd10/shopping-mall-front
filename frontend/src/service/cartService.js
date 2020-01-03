import {
    getCartList as apiGetCartList,
    addCartList as apiAddCartList,
    deleteCartList as apiDeleteCartList
} from '../apis/cart';

const getCartList = async () => {
    try {
        return await apiGetCartList();
    } catch (e) {
        console.error(e);
    }
};

const addCartList = async (productId) => {
    try {
        return await apiAddCartList(productId);
    } catch (e) {
        console.error(e);
    }
};

const deleteCartList = async (productId) => {
    try {
        return await apiDeleteCartList(productId);
    } catch (e) {
        console.error(e);
    }
}

export { getCartList, addCartList, deleteCartList };