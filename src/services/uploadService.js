import axios from 'axios';

import { API_SERVER_URL } from './config';

const URL = API_SERVER_URL + '/upload';

export const uploadFile = async (formData) => {
  try {
    const { data } = await axios.post(URL + '/img', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });
    return data;      
  } catch (error) {
    console.log(error);
  }
}
