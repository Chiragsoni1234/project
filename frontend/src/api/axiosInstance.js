import axios from "axios";

const API = axios.create({
  baseURL: "https://project-eta-self-45.vercel.app/api", // Backend base URL
});

// Add Authorization token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
