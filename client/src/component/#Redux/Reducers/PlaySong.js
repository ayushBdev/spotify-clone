import { LOGOUT, PLAY } from "../Types/Types";

const PlaySong = (state = [], action) => {
    switch(action.type) {

        case PLAY :
            return action.payload;

        case LOGOUT :
            return [];

        default: return state;
    }
};

export default PlaySong;