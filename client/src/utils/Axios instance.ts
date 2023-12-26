import axios, { AxiosInstance } from 'axios';

// Create a base Axios instance with default configuration
const user = localStorage.getItem("user");
const token = user ? JSON.parse(user).token : null ;

 const AXIOS: AxiosInstance = axios.create({
  baseURL: 'https://orchidia-store.onrender.com', // Set your API base URL // Set a timeout for requests in milliseconds
  headers: {
    'Content-Type': 'application/json',
    'authorization' : `Bearer ${token}`
  },
});

export default AXIOS