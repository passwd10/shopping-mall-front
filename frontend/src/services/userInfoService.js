import axios from 'axios';

import SERVER_URL from './config';

const URL = SERVER_URL + '/session-content';

const getUserInfo = async () => {
    const { data } = await axios.get(URL);
    return data;
}

const patchUserInfo = async (userAttribute, infoToChange) => {
    const { data } = await axios.patch(URL, { userAttribute, infoToChange })
    // userAttribute : 변경할 유저 속성, infoToChange : 변경할 내용
    return data;
}

export { getUserInfo, patchUserInfo, };