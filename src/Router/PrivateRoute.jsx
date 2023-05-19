import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    
    //user, loading context for the private route
    const { user, loading } = useContext(AuthContext);

    //location for the user comingUp state(location)
    const location = useLocation();

    //this condition for if user refresh/or want to visit any private route 
    if (loading) {
        return <progress className="progress  flex justify-center progress-secondary mx-auto text-center w-96"></progress>
    }

    if (user) {
        return children
    }
    
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;



