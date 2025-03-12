import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const { user } = useSelector(state => state.auth);
    console.log("use pr =",user)

    return user ? <Outlet /> : <Navigate to="/login" replace />;
    // return user ? children: <Navigate to="/login" replace />;
};
