import admin from '../config/firebaseConfig.js';
import userService from '../services/userService.js';

export const userIsAuthenticated = (token) => {
    if (!token) return false;

    return admin
        .auth()
        .verifyIdToken(token)
        .then((decodedToken) => {

            return admin
                    .auth()
                    .getUser(decodedToken.uid)
                    .then((userRecord) => {

                        const role = userRecord.customClaims ? userRecord.customClaims['role'] : null;

                        return { ...decodedToken, role }
                    })
        })
        .catch((err) => {
            console.log(err.message);
            return null;
        })
}