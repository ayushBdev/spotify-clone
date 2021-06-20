import React, { useEffect } from "react";
import "./Home.css";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Menu from "../Menu/Menu";
import Playlist from "../Playlist/Playlist";
import Music from "../Music/Music";
import { SWITCH } from "../#Redux/Types/Types";
import { danger } from "../Notifications/Notifications";
import API from "../#Api/Api";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Home = () => {

    const user = JSON.parse(localStorage.getItem("profile"));

    const alter = useSelector(state => state.Switch);

    const history = useHistory();
    const dispatch = useDispatch();

    const handelPush = () => {
        history.push("/auth");
        danger("Login or SignUp to see playlist");
        dispatch({
            type: SWITCH,
            payload: false
        });
    };

    useEffect(() => {
        API.get("./test");
    }, []);

    return (
        <div className="home">
            
            <div className="main_div">
                <div className="sidebar_div">
                    <Sidebar/>
                </div>
                <div className="container_div">
                    <div className="navbar_div">
                        <Navbar/>
                    </div>
                    <div className="menu_div">
                        {alter ? (
                            user!==null ? <Playlist/> : handelPush()
                        ) : (
                            <Menu/>
                        )}
                    </div>
                </div>
            </div>

            <div className="music_options">
                <Music/>
            </div>
        </div>
    );
};

export default Home;