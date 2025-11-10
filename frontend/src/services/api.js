import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE || "https://project-eta-self-45.vercel.app";

const api = axios.create({
  baseURL: BASE_URL + "/api",
});

// attach auth token if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
