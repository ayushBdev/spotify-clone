import mongoose from "mongoose";

const playlistSchema = mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    data: [{
        musicId: { type: String },
        uploadDate: { type: String }
    }],
});

export default mongoose.model("Playlist", playlistSchema);