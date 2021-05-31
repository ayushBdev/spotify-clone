import React, { useEffect } from "react";
import "./Menu.css";
import AddIcon from '@material-ui/icons/Add';

import { useSelector, useDispatch } from "react-redux";
import { getMusic } from "../#Redux/Actions/Music_Action";
import { createPlaylist } from "../#Redux/Actions/Playlist_Action";
import { PLAY } from './../#Redux/Types/Types';
import { added } from "../Notifications/Notifications";

const Menu = () => {

    const user = JSON.parse(localStorage.getItem("profile"));

    const dispatch = useDispatch();
    const music = useSelector(state => state.MusicReducer);

    const newDate = new Date()
    const date = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const handelSubmit = (userid, musicid) => {
        dispatch(createPlaylist({userId: userid, musicId: musicid, uploadDate: `${date} ${months[month]} ${year}`}));
        added();
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
                        <img src={val.img}/>
                    </div>
                    <div className="card_details">
                        <h4> {val.title} </h4>
                        <p1> 
                            {val.artist} 
                            <span> <AddIcon onClick={() => handelSubmit(user?.result._id, val._id)}/> </span> 
                        </p1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Menu;