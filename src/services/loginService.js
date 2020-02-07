import axios from 'axios';

import API_SERVER_URL from './config';

const URL = API_SERVER_URL + '/login';

const getSession = async (userId, userPasswd) => {
  const { data } = await axios.post(URL, { userId, userPasswd });
  return data;
}

const deleteSession = async () => {
  const { data } = await axios.delete(URL);
  return data;
}

export { getSession, deleteSession, };
