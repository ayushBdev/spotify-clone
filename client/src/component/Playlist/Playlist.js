import React, { useEffect } from "react";
import "./Playlist.css";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import DeleteIcon from '@material-ui/icons/Delete';

import { useSelector, useDispatch } from "react-redux";
import { getMusic } from "../#Redux/Actions/Music_Action";
import { getPlaylist, deletesPlaylist } from "../#Redux/Actions/Playlist_Action";
import { PLAY } from './../#Redux/Types/Types';
import { removed } from "../Notifications/Notifications";

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

    const deletes = (id) => {
        dispatch(deletesPlaylist(id));
        dispatch(getPlaylist());
        removed();
    };  

    useEffect(() => {
        dispatch(getPlaylist());
        dispatch(getMusic());
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

                    {playlist.filter(arr => arr.userId === user?.result._id).map((val) => (
                        music.filter(ar => ar._id === val.musicId).map((e) => (
                            <tr className="tr" onClick={() => handelPlay(e)}>
                                <td className="title"> <img src={e.img}/> <p> {e.title} </p> </td>
                                <td className="album"> {e.artist} </td>
                                <td> {val.uploadDate} </td>
                                <td className="duration"> {e.duration} <div> <DeleteIcon onClick={() => deletes(val._id)}/> </div> </td>
                            </tr>
                        ))
                    ))}
                </table>
            </div>
        </div>
    );
};

export default Playlist;