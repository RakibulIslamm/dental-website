import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <h3 className=" text-xl font-bold text-center py-20">Loading...</h3>
    }
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user ? children : <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                }
            />
        </div>
    );
};

export default PrivateRoute;