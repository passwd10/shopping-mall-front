import axios from 'axios';

import { API_SERVER_URL } from './config';

const URL = API_SERVER_URL + '/productsCategory';

const getCategories = async () => {
  const { data } = await axios.get(URL);
  console.log('data', data);
  return data;
};

export { getCategories };
