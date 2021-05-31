import mongoose from "mongoose";

const musicSchema = mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    music: {
        type: String,
        required: true
    },
});

export default mongoose.model("Music", musicSchema);