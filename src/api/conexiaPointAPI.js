import axios from "axios";
import { getEnvVariables } from "../helpers";

const { VITE_API_URL } = getEnvVariables();

export const conexiaPointAPI = axios.create({
    baseURL: VITE_API_URL,
});

conexiaPointAPI.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem("token")
    }
    return config;
} );

