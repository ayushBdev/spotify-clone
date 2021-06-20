import React, { useState, useEffect } from "react";
import "./Navbar.css";

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Avatar } from '@material-ui/core';

import { LOGOUT } from "../#Redux/Types/Types";

import decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, Link } from "react-router-dom";


const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const logout = () => {
        dispatch({
            type: LOGOUT
        });
        history.push("/");
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;
        if(token) {
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location, dispatch]);


    return (
        <div className="navbar">
            <div className="left_menu">
                <ChevronLeftIcon/>
                <ChevronRightIcon/>
            </div>
            <div className="right_menu">
                <Avatar/>
                {user ? (<>
                    <p> {user?.result.name} </p>
                    <ExitToAppIcon onClick={logout}/>
                </>) : (
                    <Link to="/auth" className="auth_link"> Sign Up </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;