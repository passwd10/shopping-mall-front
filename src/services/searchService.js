import axios from 'axios';

import { API_SERVER_URL } from './config';

const URL = API_SERVER_URL + '/products/search';

const searchProducts = async (keyword) => {
  const { data } = await axios.get(URL + `?q=${keyword}`);
  return data;
}

export { searchProducts };
