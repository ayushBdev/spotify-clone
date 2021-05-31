import { SWITCH } from "../Types/Types";

const Switch = (state = false, action) => {
    switch(action.type) {

        case SWITCH :
            return action.payload;

        default: return state;
    }
};

export default Switch;