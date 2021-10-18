import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import googleIcon from '../../images/google.png'
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const history = useHistory();

    const { user, googleSignIn, setUser, signIn, isLoading, setIsLoading, error, setError, logOut } = useAuth();
    if (isLoading) {
        return <h3 className=" text-xl font-bold text-center py-20">Loading...</h3>
    }
    // Google Sign In
    const handleGoogleSignIn = () => {
        setError('');
        googleSignIn()
            .then(result => {
                setUser(result.user);
                history.push(location.state?.from || "/");
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    // Get Email
    const getEmailFromInput = (e) => {
        setEmail(e.target.value);
    }
    // Get Password
    const getPassFromInput = (e) => {
        setPassword(e.target.value);
    }

    // Email Password Sign In
    const handleEmailPasswordSignIn = (e) => {
        e.preventDefault();
        setError('');
        signIn(email, password)
            .then(result => {
                setUser(result.user);
                setEmail('');
            })
            .catch(error => {
                setError(error.code);
            })
            .finally(() => {

            });
    }


    const inputStyle = "py-2 px-6 w-96 border border-gray-400 rounded outline-none";
    const btnStyle = "py-2 px-6 w-96 rounded bg-blue-900 text-white cursor-pointer hover:opacity-90 transition-all duration-200";
    return (
        <div className="min-h-screen flex justify-center items-center">
            {
                !user && <div className="border border-gray-300 p-20 shadow-md">
                    <h2 className="text-center text-3xl text-gray-600 font-bold mb-8">Login</h2>
                    <form className="space-y-3">
                        <input onBlur={getEmailFromInput} className={inputStyle} type="text" placeholder="Email" />
                        <br />
                        <input onBlur={getPassFromInput} className={inputStyle} type="password" placeholder="Password" />
                        <br />
                        <input onClick={handleEmailPasswordSignIn} className={btnStyle} type="submit" value="Login" />
                    </form>
                    <p className="text-red-500 text-xs italic">{error}</p>
                    <div className="flex justify-start gap-3 items-center mt-4">
                        <button onClick={handleGoogleSignIn} className="flex justify-center items-center gap-4 px-4 py-2 border border-gray-400 hover:shadow-lg">
                            <img className="w-4" src={googleIcon} alt="" /> Google Sign In
                        </button>
                        Or
                        <Link className=" text-lg font-semibold text-gray-600" to="/register">Create a new account</Link>
                    </div>
                </div>
            }
            {
                user && <div>
                    <p>Hey {user.displayName}, you already logged in</p>
                    <button onClick={logOut} className="text-lg font-semibold text-red-400">{`<<`} Log Out</button>
                </div>
            }
        </div>
    );
};

export default Login;