import { combineReducers } from "redux";
import AuthReducer from "./Auth_Reducer";
import MusicReducer from "./Music_Reducer";
import Switch from "./Switch";
import PlaylistReducer from "./Playlist_Reducer";
import PlaySong from "./PlaySong";

const rootReducer = combineReducers({
    AuthReducer: AuthReducer,
    MusicReducer: MusicReducer,
    Switch: Switch,
    PlaylistReducer: PlaylistReducer,
    PlaySong: PlaySong
});

export default rootReducer;