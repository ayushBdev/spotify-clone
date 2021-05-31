import mongoose from "mongoose";

const playlistSchema = mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    musicId: {
        type: String,
        require: true
    },
    uploadDate: {
        type: String,
        require: true
    }
});

export default mongoose.model("Playlist", playlistSchema);