import axios from 'axios';

import { API_SERVER_URL } from './config';

const URL = API_SERVER_URL + '/signUp';

const checkIdDuplicate = async (userId) => {
    const { data } = await axios.get(URL + `/checkDuplicate?id=${userId}`)
    return data;
}

const signUpUser = async (userInfo) => {
    const { data } = await axios.post(URL + `/user`, { userInfo });
    return data;
}

export { checkIdDuplicate, signUpUser };