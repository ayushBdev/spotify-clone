import * as api from "../../#Api/Api";
import { CREATE_PLAYLIST, FETCH_PLAYLIST, DELETE_PLAYLIST } from "../Types/Types";

export const getPlaylist = (id) => async(dispatch) => {
    try{
        const { data } = await api.fetchPlaylist(id);
        dispatch({
            type: FETCH_PLAYLIST,
            payload: data
        });
    }catch(err) {
        console.log(err);
    }
};

export const createPlaylist = (id, datas) => async(dispatch) => {
    try{
        const { data } = await api.createPlaylist(id, datas);
        dispatch({
            type: CREATE_PLAYLIST,
            payload: data
        });
    }catch(err) {
        console.log(err);
    }
};

export const deletesPlaylist = (id,musicId) => async(dispatch) => {
    try{
        const { data } = await api.deletePlaylist(id,musicId);
        dispatch({
            type: DELETE_PLAYLIST,
            payload: data
        });
    }catch(err) {
        console.log(err);
    }
};