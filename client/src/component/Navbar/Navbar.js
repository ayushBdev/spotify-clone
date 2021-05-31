import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Avatar } from '@material-ui/core';
import * as actionType from "../#Redux/Types/Types";

import decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";


const Navbar = () => {

    const users = useSelector(state => state.AuthReducer);

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")) || users);
    console.log(user);

    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const logout = () => {
        dispatch({
            type: actionType.LOGOUT
        });
        history.push("/auth");
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
                <p> {user?.result.name} </p>
                <ExitToAppIcon onClick={logout}/>
            </div>
        </div>
    );
};

export default Navbar;