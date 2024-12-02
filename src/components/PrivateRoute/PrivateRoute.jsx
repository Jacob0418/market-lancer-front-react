import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, requiredRole, ...rest }) => {
    const [role, setRole] = useState(localStorage.getItem("typeRole"));

    useEffect(() => {
        if (!role) {
            setRole(null);
        }
    }, [role]);

    if (!role ) {
        // setTimeout(() => {
            <Navigate to="/LoginRegister" replace />;
        // }, 5000);
    }

    const isAllowed = requiredRole.includes(role);
    console.log(localStorage.getItem("typeRole"))
    return isAllowed ? Component : <Navigate to="/LoginRegister" replace />;
};

export default PrivateRoute;
