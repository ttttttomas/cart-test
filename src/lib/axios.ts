import axios from "axios";

const api = axios.create({
    baseURL: "https://api-burgerli.iwebtecnology.com/",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true"
    }
  });

  export default api;