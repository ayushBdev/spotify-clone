import { CREATE, FETCH_ALL } from "../Types/Types";

const MusicReducer = (state = [], action) => {
    switch(action.type) {

        case FETCH_ALL:
            return action.payload;
            
        case CREATE :
            return [...state, action.payload];
        default: return state;
    }
};

export default MusicReducer;