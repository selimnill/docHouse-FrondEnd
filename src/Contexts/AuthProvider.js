import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const signup = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) =>{
        return updateProfile(user, userInfo);
    }

    const logOut = () =>{
        setLoader(true);
        return signOut(auth);
    }





    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('checking onAuthStateChanged');
            setUser(currentUser);
            setLoader(false);
        })
        return () => unsubscribe();
    }, [])


    const authInfo = {
        signup,
        signIn,
        updateUser,
        logOut,
        user, 
        loader

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;