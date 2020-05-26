import axios from 'axios';

import { API_SERVER_URL } from './config';

const URL = API_SERVER_URL + '/upload';

const uploadImg = async (imgInfo) => {
  console.log('imgInfo', imgInfo);
  
  const { data } = await axios.post(URL + '/img', imgInfo, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  });
  return data;
}

export { uploadImg };
