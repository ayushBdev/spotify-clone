import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Menu from "../Menu/Menu";
import Playlist from "../Playlist/Playlist";
import Music from "../Music/Music";
import Auth from "../Authentication/Auth";

import { useSelector } from "react-redux";

const Home = () => {

    const user = JSON.parse(localStorage.getItem("profile"));

    const alter = useSelector(state => state.Switch);

    if (!user) {
        return (
            <Auth/>
        )
    }

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
                        {alter ? <Playlist/> : <Menu/>}
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