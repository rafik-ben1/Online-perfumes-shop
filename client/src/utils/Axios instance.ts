import axios, { AxiosInstance } from 'axios';
import { userType } from './types';

const user = localStorage.getItem("user");
const token : userType = user !==null ? JSON.parse(user)?.token : null;

 const AXIOS: AxiosInstance = axios.create({
  baseURL: 'https://orchidia-store.onrender.com', 
  headers: {
    'Content-Type': 'application/json',
    'authorization' : `Bearer ${token}`
  },
});

export default AXIOS