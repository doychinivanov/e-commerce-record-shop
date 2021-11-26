import { auth } from '../config/firebaseConfig';

export const getUserToken = async () => {

    const currentUser = auth.currentUser;

    if (!currentUser) return null;

    return await currentUser.getIdToken(true);
};