import express from "express";
import Middleware from "../Middleware/Middleware.js";
import { createMusic, getMusic } from "../Controller/Music_Controller.js";

const router = express.Router();

router.get("/", getMusic);
router.post("/", Middleware,  createMusic);

export default router;