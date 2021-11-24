import React, { useContext, useState, useEffect } from 'react';
import { auth, authService } from '../config/firebaseConfig';

const AuthCtx = React.createContext();

export const useAuth = () => {
    return useContext(AuthCtx);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [userRole, setUserRole] = useState(undefined);

    useEffect(() => {
        const unsubscribe = authService.onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);

            if (user) {
                user.getIdTokenResult(true)
                    .then((idTokenResult) => {
                        setUserRole(idTokenResult.claims['role']);
                    })
                    .catch((err) => console.log(err.message))
                    .finally(() => setIsLoading(false));
            }

            setIsLoading(false);
        });

        return unsubscribe;
    }, []);

    const logout = async () => {
        setUserRole(undefined);
        return await authService.signOut(auth);
    };

    const signup = async (email, password) => {
        const createdUser = await authService.createUserWithEmailAndPassword(auth, email, password);

        createdUser.user.getIdToken(true)
        .then(() => {
            createdUser.user
                .getIdTokenResult(true)
                .then((idTokenResult) => {
                    setUserRole(idTokenResult.claims['role']);
                })
                .catch((err) => console.log(err.message));
        });

        return createdUser;
    };

    const login = async (email, password) => {
        return authService.signInWithEmailAndPassword(auth, email, password);
    };

    const getNewPassword = (email) => {
        return authService.sendPasswordResetEmail(auth, email);
    };

    const changeEmail = (newEmail) => {
        return currentUser.updateEmail(auth, newEmail);
    };

    const changePassword = (newPassword) => {
        return currentUser.updatePassword(auth, newPassword);
    };

    const verifyEmail = () => {
        authService.sendEmailVerification(auth.currentUser);
    };

    // const sendPasswordResetEmail = (employeeEmail) => {
    //     const actionCodeSettings = {
    //         url: apiRoutes.userRessetPasswordURL(),
    //         handleCodeInApp: true,
    //     };

    //     return authService.sendPasswordResetEmail(auth, employeeEmail, actionCodeSettings);
    // };

    const value = {
        currentUser,
        login,
        signup,
        logout,
        getNewPassword,
        changeEmail,
        changePassword,
        userRole,
        verifyEmail,
        // sendPasswordResetEmail,
    }

    return <AuthCtx.Provider value={value}>{!isLoading && children}</AuthCtx.Provider>;
}