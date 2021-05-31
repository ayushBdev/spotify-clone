import { CREATE_PLAYLIST, FETCH_PLAYLIST, DELETE_PLAYLIST } from "../Types/Types";

const PlaylistReducer = (state = [], action) => {
    switch(action.type) {

        case FETCH_PLAYLIST:
            return action.payload;
            
        case CREATE_PLAYLIST :
            return [...state, action.payload];

        case DELETE_PLAYLIST : 
            return state.filter((arr) => arr._id !== action.payload);

        default: return state;
    }
};

export default PlaylistReducer;