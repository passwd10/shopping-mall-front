import axios from 'axios';

const USER_STORE = 'http://localhost:3000/userStore';

const getUserInfo = async () => {
    const { data } = await axios.get(USER_STORE);
    return data;
}

export { getUserInfo };