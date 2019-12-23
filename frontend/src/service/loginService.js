import { getUserInfo as apiGetUserInfo } from '../apis/user';

const getUserInfo = async (userId, userPasswd) => {
    try {
        return await apiGetUserInfo(userId, userPasswd);
    } catch (e) {
        console.error(e);
    }
}

export default getUserInfo;
