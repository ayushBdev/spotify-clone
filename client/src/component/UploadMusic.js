import React, {useState} from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import {  createMusics } from "./#Redux/Actions/Music_Action";

const UploadMusic = () => {

    const initialState = {
        title: "",
        img: "",
        artist: "",
        duration: "",
        music: "",
        asdf: ""
    };

    const [postData, setPostData] = useState(initialState);
    const dispatch = useDispatch();

    const clear = () => {
        setPostData(initialState);
    };

    const handelPost = async(event) => {
        event.preventDefault();
        dispatch(createMusics(postData));
        clear();
    };


    return (
        <div className="uploadpost">
            <form  className="" onSubmit={handelPost}>
                <input 
                    type="text"
                    placeholder="artist"
                    name="artist"
                    onChange={(event) => setPostData({...postData, artist: event.target.value})}
                />
                <input 
                    type="text"
                    placeholder="title"
                    name="title"
                    onChange={(event) => setPostData({...postData, title: event.target.value})}
                />
                <input 
                    type="text"
                    placeholder="duration"
                    name="duration"
                    onChange={(event) => setPostData({...postData, duration: event.target.value})}
                />
                <input 
                    type="text"
                    placeholder="music"
                    name="music"
                    onChange={(event) => setPostData({...postData, music: event.target.value})}
                />
                <FileBase 
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setPostData({...postData, img:base64})}
                />
                <input type="file" id="file" name="file" multiple accept="audio/*" onChange={(event) => setPostData({...postData, asdf: event.target.value})}/>

                <button type="submit"> Upload </button>
            </form>
        </div>
    );
};

export default UploadMusic;