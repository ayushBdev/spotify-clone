import React from "react";
import "./Music.css";

import { defaults } from "../Images/Images";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import MusicData from "./MusicData/MusicData";

import { useSelector } from 'react-redux';

const Music = () => {

    const play = useSelector(state => state.PlaySong);

    return(
        <div className="music">

            <div className="imgs">
                <img src={play.img || defaults} alt=""/>
                <p> {play.title} </p>
            </div>

            {play.length!==0 ? (
                MusicData.filter(arr => arr.name === play.music).map(ar => (
                    <AudioPlayer src={ar.value} style={{width: "30vw"}}/>
                ))
            ) : (
                <AudioPlayer src="" style={{width: "30vw"}}/>
            )}

            <div className="imgs"/>

        </div>
    );
};

export default Music;