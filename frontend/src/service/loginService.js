import { getSession as apiGetSession, 
         deleteSession as apiDeleteSession,
         getUserInfo as apiGetUserInfo,
         patchUserInfo as apiPatchUserInfo } from '../apis/user';

const getSession = async (userId, userPasswd) => {
    try {
        return await apiGetSession(userId, userPasswd);
    } catch (e) {
        console.error(e);
    }
}

export const deleteSession = async () => {
    try {
        return await apiDeleteSession();
    } catch (e) {
        console.error(e);
    }
}

export const getUserInfo = async () => {
    try {
        return await apiGetUserInfo();
    } catch (e) {
        console.error(e);
    }
}

export const patchUserInfo = async (userAttribute, infoToChange) => {
    try {
        return await apiPatchUserInfo(userAttribute, infoToChange);
    } catch (e) {
        console.error(e);        
    }
}

export default getSession;
