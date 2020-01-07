import axios from 'axios';

import { API_SERVER_URL } from './config';

const URL = API_SERVER_URL + '/signUp/checkDuplicate?';

const checkIdDuplicate = async (userId) => {
    const { data } = await axios.get(URL + `id=${userId}`)
    return data;
}

export { checkIdDuplicate };