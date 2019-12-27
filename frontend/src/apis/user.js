import axios from 'axios';

const SESSION_LOGIN = 'http://localhost:8080/login';
const CHECK_SESSION_ID = 'http://localhost:3000'

const getSession = async (userId, userPasswd) => {
    const { data } = await axios.post(SESSION_LOGIN, { userId, userPasswd });
    return data;
}

const isThereSession = async () => {
    const { data } = await axios.post()
}
//cookie의 value(sessionId)값을 서버에 보내어 확인해주자

export { getSession };