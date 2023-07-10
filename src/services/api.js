import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "53181c59f92b894fd76017be0172395a",
    language: "pt-BR",
    page: 1
  }
});

export default api;
