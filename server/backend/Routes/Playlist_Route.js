import express from "express";
import { getPlaylist, createPlaylist, deletePlaylist } from "../Controller/Playlist_Controller.js";

const router = express.Router();

router.get("/", getPlaylist);
router.post("/", createPlaylist);
router.delete("/:id", deletePlaylist);

export default router;