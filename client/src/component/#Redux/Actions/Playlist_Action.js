import * as api from "../../#Api/Api";
import { CREATE_PLAYLIST, FETCH_PLAYLIST, DELETE_PLAYLIST } from "../Types/Types";

export const getPlaylist = () => async(dispatch) => {
    try{
        const { data } = await api.fetchPlaylist();
        dispatch({
            type: FETCH_PLAYLIST,
            payload: data
        });
    }catch(err) {
        console.log(err);
    }
};

export const createPlaylist = (datas) => async(dispatch) => {
    try{
        const { data } = await api.createPlaylist(datas);
        dispatch({
            type: CREATE_PLAYLIST,
            payload: data
        });
    }catch(err) {
        console.log(err);
    }
};

export const deletesPlaylist = (id) => async(dispatch) => {
    try{
        const { data } = await api.deletePlaylist(id);
        dispatch({
            type: DELETE_PLAYLIST,
            payload: data
        });
    }catch(err) {
        console.log(err);
    }
};