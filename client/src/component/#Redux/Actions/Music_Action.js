import * as api from "../../#Api/Api";
import { CREATE, FETCH_ALL } from "../Types/Types";

export const getMusic = () => async(dispatch) => {
    try{
        const { data } = await api.fetchMusic();
        dispatch({
            type: FETCH_ALL,
            payload: data
        });
    }catch(err) {
        console.log(err);
    }
};

export const createMusics = (music) => async(dispatch) => {
    try{
        const { data } = await api.createMusic(music);
        dispatch({
            type: CREATE,
            payload: data
        });
    }catch(err) {
        console.log(err);
    }
};