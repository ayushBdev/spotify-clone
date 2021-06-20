import express from "express";
import Playlist from "../Modals/Playlist_Schema.js";

const router = express.Router();

export const createPlaylist = async(req,res) => {
    const { id } = req.params;
    const { musicId, uploadDate } = req.body;
    try {
        const oldUser = await Playlist.findOne({userId: id});

        if(oldUser) {
            const update = await Playlist.findByIdAndUpdate(oldUser._id, {$push: {data: {"musicId": musicId, "uploadDate":uploadDate}}});
            res.status(200).json(update);
        } else {
            const newPlaylist = await Playlist.create({ userId:id, musicId, uploadDate });
            res.status(200).json(newPlaylist);
        }
    }catch(err) {
        res.status(404).json({message: err.message});
    }
};

export const getPlaylist = async(req,res) => {
    const { id } = req.params;
    try{
        const playlistInfo = await Playlist.find({userId: id});
        res.status(200).json(playlistInfo);
    }catch(err) {
        res.status(404).json({message: err.message});
    }
};

export const deletePlaylist = async(req,res) => {
    const { id } = req.params;
    const { musicId } = req.body;
    try {
        const Delete = await Playlist.findOneAndUpdate({userId:id}, {$pull: {data: {"musicId": musicId}}}, {multi:true});
        res.status(200).json(Delete);
    }catch(err) {
        res.status(404).json({message: err.message});
    }
};

export default router;