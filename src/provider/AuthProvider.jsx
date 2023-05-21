import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);

// google login popup provider
const googleProvider = new GoogleAuthProvider();




const AuthProvider = ({ children }) => {


    //state for user of the website
    const [user, setUser] = useState(null);

    //loader for every page of this site
    const [loading, setLoading] = useState(true)

    //user registration method
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //user Login method
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //user login method with google popup
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }


    //user information in details method
    const userUpdateProfile = (user, name, photo) => {
        setLoading(true)
        return updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
    }

    //user logout method from the website
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    //observer user profile login or logout
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false)
        })

        return () => {
            unsubscribe();
        }

    }, [])

    // all context send here by authInformation
    const authProfileInformation = {
        user,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        loading,
        userUpdateProfile


    }
    return (
        <AuthContext.Provider value={authProfileInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;