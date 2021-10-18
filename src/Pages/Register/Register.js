import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { user, setUser, signUp, error, setError, setUserName, logOut } = useAuth();

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
                })
                .catch(error => {
                    setError(error.message);
                });
        }
        else {
            setError("Password Doesn't match")
        }

    }



    const inputStyle = "py-2 px-6 w-96 border border-gray-400 rounded outline-none";
    const btnStyle = "py-2 px-6 w-96 rounded bg-blue-900 text-white cursor-pointer hover:opacity-90 transition-all duration-200";
    return (
        <div className="min-h-screen flex justify-center items-center">
            {
                !user &&
                <div className="border border-gray-300 p-20 shadow-md">
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
                    <Link className="block mt-3 text-lg font-semibold text-gray-500" to="/login">Already Have an account</Link>
                </div>
            }

            {
                user && <div>
                    <p>Hey {user.displayName}, you already Registered and also has logged in</p>
                    <button onClick={logOut} className="text-lg font-semibold text-red-400">{`<<`} Log Out</button>
                </div>
            }
        </div>
    );
};

export default Register;