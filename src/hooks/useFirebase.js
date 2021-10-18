import { useState, useEffect } from "react";
import firebaseAuthInit from "../Firebase/firebaseInit";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from 'firebase/auth';


firebaseAuthInit();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    // const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();



    // Register
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Sign In
    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };

    // Set Display Name
    const setUserName = (name) => {
        return updateProfile(auth.currentUser, { displayName: name })
            .then(() => {

            })
            .catch(error => {
                setError(error.code);
            })
    }

    // onAuthStateChanged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {

            }
        });
        return () => unsubscribe();
    }, [])

    // Sign Out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
    };

    return {
        user, setUser,
        error, setError,
        signUp,
        signIn,
        googleSignIn,
        setUserName,
        logOut

    }
}

export default useFirebase;