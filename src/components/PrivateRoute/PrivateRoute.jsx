import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, requiredRole, ...rest }) => {
    const [role, setRole] = useState(null);

    useEffect(() => {
        const storedRoleId = localStorage.getItem("typeRole");
        setRole(storedRoleId);
    }, []);

    if (role === null) {
        return <div>Loading...</div>;
    }

    const isAllowed = requiredRole.includes(role);
    console.log(localStorage.getItem("typeRole"))
    return isAllowed ? Component : <Navigate to="/LoginRegister" replace />;
};

export default PrivateRoute;
