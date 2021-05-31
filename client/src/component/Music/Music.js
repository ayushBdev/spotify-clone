import React from "react";
import "./Music.css";
import defaults from "../#Images/default.png";

import OnMyWay from "../#Audio/OnMyWay.mp3";
import Cartoon from "../#Audio/Cartoon.mp3";
import Whoopty from "../#Audio/Whoopty.mp3";
import Fearless from "../#Audio/Fearless.mp3";
import Opening from "../#Audio/dsOpening.mp3";
import Astronaut from "../#Audio/astronout.mp3";
import Homura from "../#Audio/Homura.mp3";
import Lily from "../#Audio/Lily.mp3";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';

const Music = () => {

    const play = useSelector(state => state.PlaySong);


    return(
        <div className="music">

            <div className="imgs">
                <img src={play.img || defaults}/>
                <p> {play.title} </p>
            </div>

            <div className="player">
                {       (play.music === "OnMyWay" && <AudioPlayer src={OnMyWay} style={{width: "30vw"}}/>)
                    ||  (play.music === "Cartoon" && <AudioPlayer src={Cartoon} style={{width: "30vw"}}/>)
                    ||  (play.music === "Whoopty" && <AudioPlayer src={Whoopty} style={{width: "30vw"}}/>)
                    ||  (play.music === "Fearless" && <AudioPlayer src={Fearless} style={{width: "30vw"}}/>)
                    ||  (play.music === "Opening" && <AudioPlayer src={Opening} style={{width: "30vw"}}/>)
                    ||  (play.music === "Astronaut" && <AudioPlayer src={Astronaut} style={{width: "30vw"}}/>)
                    ||  (play.music === "Homura" && <AudioPlayer src={Homura} style={{width: "30vw"}}/>)
                    ||  (play.music === "Lily" && <AudioPlayer src={Lily} style={{width: "30vw"}}/>)
                    ||  <AudioPlayer src="" style={{width: "30vw"}}/>
                }
            </div>

            <div className="imgs">

            </div>

        </div>
    );
};

export default Music;