import axios from 'axios';

import SERVER_URL from './config';

const URL = SERVER_URL + '/session-content';

const getUserInfo = async () => {
  const { data } = await axios.get(URL);
  return data;
}

const patchUserInfo = async (updateInfo) => {
  const { data } = await axios.patch(URL, { updateInfo })
  return data;
}

export { getUserInfo, patchUserInfo, };
