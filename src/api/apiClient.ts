import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.BASE_URL || "http://localhost:5000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Setup response interceptors to handle global api errors at one place.
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === "401") {
      console.error("Unauthorized! Please login again.");
    }
    return Promise.reject(error);
  }
);

// TODO: Setup request interceptors to handle authorization initialization (bearer token etc.) 

export default apiClient;
