import React, { useEffect } from "react";
import "./Menu.css";

import AddIcon from '@material-ui/icons/Add';

import { getMusic } from "../#Redux/Actions/Music_Action";
import { createPlaylist } from "../#Redux/Actions/Playlist_Action";
import { PLAY } from './../#Redux/Types/Types';
import { notify, danger } from "../Notifications/Notifications";
import { todayDate } from "../Time/Time";

import { useSelector, useDispatch } from "react-redux";

const Menu = () => {

    const user = JSON.parse(localStorage.getItem("profile"));

    const dispatch = useDispatch();
    const music = useSelector(state => state.MusicReducer);

    const handelSubmit = (musicid) => {
        const data = {
            musicId: musicid,
            uploadDate: todayDate
        };
        if(user!==null) {
            dispatch(createPlaylist(user?.result._id, data));
            notify("Added Successfully");
        } else {
            danger("Login to add to playlist");
        }
    };

    const handelPlay = (val) => {
        dispatch({
            type: PLAY,
            payload: val
        });
        
    };

    useEffect(() => {
        dispatch(getMusic());
    }, [dispatch]);

    return(
        <div className="menu">
            {music.map((val) => (
                <div className="card" key={val._id} onClick={() => handelPlay(val)}> 
                    <div className="card_img">
                        <img src={val.img} alt=""/>
                    </div>
                    <div className="card_details">
                        <h4> {val.title} </h4>
                        <p1> 
                            {val.artist} 
                            <span> <AddIcon onClick={() => handelSubmit(val._id)}/> </span> 
                        </p1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Menu;