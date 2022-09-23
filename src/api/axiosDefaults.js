import axios from "axios";

// The code taken from the Code Institute moments project
axios.defaults.baseURL = "https://drf-api-project.onrender.com";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
