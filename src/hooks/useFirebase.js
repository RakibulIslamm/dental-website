import { useState, useEffect } from "react";
import firebaseAuthInit from "../Firebase/firebaseInit";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from 'firebase/auth';


firebaseAuthInit();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);



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
            .finally(() => setIsLoading(false));
    }

    // onAuthStateChanged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {

            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, [])

    // Sign Out
    const logOut = () => {
        return signOut(auth);
    };

    return {
        user, setUser,
        error, setError,
        signUp,
        signIn,
        googleSignIn,
        setUserName,
        isLoading,
        setIsLoading,
        logOut

    }
}

export default useFirebase;