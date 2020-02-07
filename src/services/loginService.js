import axios from 'axios';

import SERVER_URL from './config';

const URL = SERVER_URL + '/login';

const getSession = async (userId, userPasswd) => {
  const { data } = await axios.post(URL, { userId, userPasswd }, { withCredentials: true});
  return data;
}

const deleteSession = async () => {
  const { data } = await axios.delete(URL);
  return data;
}

export { getSession, deleteSession, };
