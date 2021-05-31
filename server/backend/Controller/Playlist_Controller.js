import express from "express";
import Playlist from "../Modals/Playlist_Schema.js";

const router = express.Router();

export const createPlaylist = async(req,res) => {
    try {
        const { userId, musicId, uploadDate } = req.body;
        const newPlaylist = await Playlist.create({ userId, musicId, uploadDate });
        res.status(200).json(newPlaylist);
    }catch(err) {
        res.status(404).json({message: err.message});
    }
};

export const getPlaylist = async(req,res) => {
    try{
        const playlistInfo = await Playlist.find();
        res.status(200).json(playlistInfo);
    }catch(err) {
        res.status(404).json({message: err.message});
    }
};

export const deletePlaylist = async(req,res) => {
    const { id } = req.params;
    try {
        const Delete = await Playlist.findByIdAndRemove(id);
        res.status(200).json(Delete);
    }catch(err) {
        res.status(404).json({message: err.message});
    }
};

export default router;