import React, { useState } from "react";
import "./Sidebar.css";

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { logo2 } from "../Images/Images";

import { SWITCH } from "../#Redux/Types/Types";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Sidebar = () => {

    const dispatch = useDispatch();

    const [state, setState] = useState(true);

    const handelClick = () => {
        dispatch({
            type: SWITCH,
            payload: false
        });
        setState(true);
    };

    const handelClick2 = () => {
        dispatch({
            type: SWITCH,
            payload: true
        });
        setState(false);
    };

    return(
        <div className="sidebar">
            <div className="sidebar_divs">
                <Link to="/" className="links">
                    <div className="app_logo" onClick={handelClick}> 
                        <img src={logo2} alt=""/>
                        <p> Spotify </p>
                    </div>
                </Link>
                <div className="sidebar_menu1">
                    <Link to="/" onClick={handelClick} className={state ? "selected link" : " link"}> <HomeIcon/> <p> Home </p> </Link>
                    <div> <SearchIcon/> <p> Search </p> </div>
                </div>
                <div className="sidebar_menu2">
                    <Link to="/" onClick={handelClick2} className={state ? "link" : "selected link"}> <AddIcon/> <p> My Playlist </p> </Link>
                    <div> <FavoriteIcon/> <p> Liked Songs </p> </div>
                </div>
            </div>
            <div className="app_ins">
                <ArrowDownwardIcon/>
                <p> Install App </p>
            </div>
        </div>
    );
};

export default Sidebar;