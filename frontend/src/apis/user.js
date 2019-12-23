import axios from 'axios';

const LOGIN = 'http://localhost:3000/login';

const getUserInfo = async (userId, userPasswd) => {
    const { data } = await axios.post(LOGIN, { userId, userPasswd });
    return data;
}

export { getUserInfo };