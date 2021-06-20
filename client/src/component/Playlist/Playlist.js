import React, { useEffect } from "react";
import "./Playlist.css";

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import DeleteIcon from '@material-ui/icons/Delete';

import { getPlaylist, deletesPlaylist } from "../#Redux/Actions/Playlist_Action";
import { PLAY } from './../#Redux/Types/Types';
import { danger } from "../Notifications/Notifications";

import { useSelector, useDispatch } from "react-redux";

const Playlist = () => {
    
    const user = JSON.parse(localStorage.getItem("profile"));

    const dispatch = useDispatch();

    const music = useSelector(state => state.MusicReducer);
    const playlist = useSelector(state => state.PlaylistReducer);

    const handelPlay = (val) => {
        dispatch({
            type: PLAY,
            payload: val
        });
    };

    const deletes = (musicId) => {
        dispatch(deletesPlaylist(user?.result._id,{musicId:musicId}));
        dispatch(getPlaylist(user?.result._id));
        danger("Removed Successfully");
    };  

    useEffect(() => {
        dispatch(getPlaylist(user?.result._id));
    }, [dispatch]);

    return (
        <div className="playlist">
            <div className="header">
                <PlayArrowIcon/>
                <h4> {user?.result.name} </h4>
            </div>
            <div className="table_div">
                <table className="table">
                    <tr className="gap">
                        <td className="title"> TITLE </td>
                        <td className="album"> ARTIST </td>
                        <td> DATE ADDED </td>
                        <td className="duration"> <QueryBuilderIcon/> </td>
                    </tr>

                    {playlist.length>0 && playlist[0].data.map((val) => (
                        music.filter(ar => ar._id === val.musicId).map((e) => (
                            <tr className="tr" onClick={() => handelPlay(e)}>
                                <td className="title"> <img src={e.img} alt=""/> <p> {e.title} </p> </td>
                                <td className="album"> {e.artist} </td>
                                <td> {val.uploadDate} </td>
                                <td className="duration"> {e.duration} <div> <DeleteIcon onClick={() => deletes(e._id)}/> </div> </td>
                            </tr>
                        ))
                    ))}
                </table>
            </div>
        </div>
    );
};

export default Playlist;