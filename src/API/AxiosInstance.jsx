import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // Base URL
  timeout: 5000,                      // Tiempo de espera
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para manejar tokens (ejemplo)
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
