import express from "express";
import Music from "../Modals/Music_Schema.js";

const router = express.Router();

export const createMusic = async(req,res) => {
    try{
        const { img, title, artist, duration, music } = req.body;
        const newMusic = await Music.create({ img, title, artist, duration, music });
        res.status(200).json(newMusic);
    }catch(err){
        res.status(404).json({message: err.message});
    }
};

export const getMusic = async(req,res) => {
    try{
        const musicInfo = await Music.find();
        res.status(200).json(musicInfo);
    }catch(err) {
        res.status(404).json({message: err.message});
    }
};

export default router;