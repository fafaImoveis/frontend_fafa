import axios from "axios";

const apiu = ''

const api = axios.create({
    baseURL: "http://18.204.16.50:3333",
});

export default api;
