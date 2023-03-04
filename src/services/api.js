import axios from "axios";

const apiu = ''

const api = axios.create({
    baseURL: "http://localhost:3333",
});

export default api;