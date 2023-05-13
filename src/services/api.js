import axios from "axios";

const apiu = ''

const api = axios.create({
    baseURL: "https://www.fagundesimoveis.app.br",
});

export default api;
