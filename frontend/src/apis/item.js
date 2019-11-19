import axios from 'axios';

const ITEMS_URL = 'http://localhost:3000/items';

export const getItems = async () => {
    const { data } = await axios.get(ITEMS_URL);
    return data;
}