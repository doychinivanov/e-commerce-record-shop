import admin from "../config/firebaseConfig.js";

export const addAdminRole = (uid) => {
    admin
        .auth()
        .setCustomUserClaims(uid, { role: 'admin' })
        .then(() => {
            console.log('claim added');
        })
        .catch((err) => {
            console.log(err);
        });

};

export const addCustomerRole = (uid) => {
    admin
        .auth()
        .setCustomUserClaims(uid, { role: 'customer' })
        .then(() => {
            console.log('claim added');
        })
        .catch((err) => {
            console.log(err);
        });

};