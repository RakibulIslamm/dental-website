import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const location = useLocation();
    const history = useHistory();

    const { user, setUser, signUp, isLoading, setIsLoading, error, setError, setUserName, logOut } = useAuth();
    if (isLoading) {
        return <h3 className=" text-xl font-bold text-center py-20">Loading...</h3>
    }

    // Get Name
    const getNameFromInput = (e) => {
        setName(e.target.value);
    }
    // Get Email
    const getEmailFromInput = (e) => {
        setEmail(e.target.value);
    }
    // Get Password
    const getPassFromInput = (e) => {
        setPassword(e.target.value);
    }
    // Get confirm Password
    const getConPassFromInput = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        setError('');
        if (password === confirmPassword) {
            signUp(email, password)
                .then(result => {
                    setUser(result.user);
                    setUserName(name);
                    history.push(location.state?.from || "/");
                })
                .catch(error => {
                    setError(error.message);
                })
                .finally(() => setIsLoading(false));
        }
        else {
            setError("Password Doesn't match")
        }

    }

    // Log Out
    const handleLogOut = () => {
        logOut()
            .then(() => {
                setUser(null);
                history.push("/");
            })
            .finally(() => setIsLoading(false));
    }



    const inputStyle = "py-2 px-6 w-96 xs:w-full sm:w-full border border-gray-400 rounded outline-none";
    const btnStyle = "py-2 px-6 w-96 xs:w-full sm:w-full rounded bg-blue-900 text-white cursor-pointer hover:opacity-90 transition-all duration-200";
    return (
        <div className="min-h-screen flex justify-center items-center xs:px-4 sm:px-6">
            {
                !user &&
                <div className=" xs:w-full sm:w-full border border-gray-300 p-12 xs:p-4 sm:px-6 shadow-md">
                    <h2 className="text-center text-3xl text-gray-600 font-bold mb-8">Sign Up</h2>
                    <form className="space-y-3">
                        <input onBlur={getNameFromInput} className={inputStyle} type="text" placeholder="Name" />
                        <br />
                        <input onBlur={getEmailFromInput} className={inputStyle} type="text" placeholder="Email" />
                        <br />
                        <input onBlur={getPassFromInput} className={inputStyle} type="password" placeholder="Password" />
                        <br />
                        <input onBlur={getConPassFromInput} className={inputStyle} type="password" placeholder="Confirm Password" />
                        <br />
                        <input onClick={handleSignUp} className={btnStyle} type="submit" value="Sign Up" />
                    </form>
                    <p className="text-red-500 text-xs italic">{error}</p>
                    <Link className="block mt-3 text-lg xs:text-base font-semibold text-gray-500" to="/login">Already Have an account?</Link>
                </div>
            }

            {
                user && <div>
                    <p>Hey {user.displayName}, you already Registered and also has logged in</p>
                    <button onClick={handleLogOut} className="text-lg font-semibold text-red-400">{`<<`} Log Out</button>
                </div>
            }
        </div>
    );
};

export default Register;