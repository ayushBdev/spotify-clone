import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import authRouter from "./Routes/Auth_Routes.js";
import musicRouter from "./Routes/Music_Route.js";
import playlistRouter from "./Routes/Playlist_Route.js";

const app = express();

app.use(bodyparser.json({limit:"30mb", extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use("/auth", authRouter);
app.use("/music", musicRouter);
app.use("/playlist", playlistRouter);

const ATLAS = process.env.ATLAS;
const PORT = process.env.PORT || 5000;

mongoose.connect(ATLAS, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => app.listen(PORT, () => console.log(`Server is running at Port: ${PORT}`)))
    .catch((err) => console.log(`${err} did not connected`));

mongoose.set("useFindAndModify", false);