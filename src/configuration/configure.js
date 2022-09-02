import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://xeniaverse.herokuapp.com/api",
  // baseURL: "http://localhost:4000/api",
});

export default axiosInstance;
