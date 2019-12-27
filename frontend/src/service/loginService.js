import { getSession as apiGetSession, } from '../apis/user';

const getSession = async (userId, userPasswd) => {
    try {
        return await apiGetSession(userId, userPasswd);
    } catch (e) {
        console.error(e);
    }
}

export default getSession;
