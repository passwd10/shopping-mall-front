import { getProducts as apiGetProducts } from '../apis/task';

const getProducts = async () => {
    try {
        return await apiGetProducts();
    } catch(e) {
        console.error(e);
    }
}

export { getProducts };