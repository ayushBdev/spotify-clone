import express from "express";
import { getPlaylist, createPlaylist, deletePlaylist } from "../Controller/Playlist_Controller.js";
import Middleware from "../Middleware/Middleware.js";

const router = express.Router();

router.get("/:id",Middleware, getPlaylist);
router.patch("/create/:id", Middleware, createPlaylist);
router.patch("/delete/:id", Middleware, deletePlaylist);

export default router;