import axios from 'axios';

const SESSION_LOGIN = 'http://localhost:8080/login';
const SESSION_CONTENT = 'http://localhost:8080/session-content'

const getSession = async (userId, userPasswd) => {
    const { data } = await axios.post(SESSION_LOGIN, { userId, userPasswd });
    return data;
}

const deleteSession = async () => {
    const { data } = await axios.delete(SESSION_LOGIN);
    return data;
}

const getUserInfo = async () => {
    const { data } = await axios.get(SESSION_CONTENT);
    return data;
}

const patchUserInfo = async (userAttribute, infoToChange) => {
    const { data } = await axios.patch(SESSION_CONTENT, { userAttribute, infoToChange })
    // userAttribute : 변경할 유저 속성, infoToChange : 변경할 내용
    return data;
}

//cookie의 value(sessionId)값을 서버에 보내어 확인해주자

export { getSession, deleteSession, getUserInfo, patchUserInfo };