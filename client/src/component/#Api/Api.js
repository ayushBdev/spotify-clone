import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5000/"});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;   
    }
    return req;
});

export const fetchMusic = () => API.get("/music");
export const createMusic = (newMusic) => API.post("/music", newMusic);

export const signIn = (formData) => API.post("/auth/signin", formData);
export const signUp = (formData) => API.post("/auth/signup", formData);

export const fetchPlaylist= () => API.get("/playlist");
export const createPlaylist = (data) => API.post("/playlist", data);
export const deletePlaylist = (id) => API.delete(`/playlist/${id}`);