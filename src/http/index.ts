import axios from 'axios';
import {AuthenticationResponse} from "../models/response/AuthenticationResponse";

export const API_URL = 'http://localhost:8080/api/v1';

const api = axios.create({
    // withCredentials: true,
    baseURL: API_URL
})

api.interceptors.request.use((config) => {
    config.headers!.Authorization = `Bearer_${localStorage.getItem('token')}`;
    return config;
})

api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 403 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const refreshToken = localStorage.getItem("refreshToken");
            const response = await axios.post<AuthenticationResponse>(`${API_URL}/auth/refresh`, {refreshToken});
            localStorage.setItem("refreshToken", response.data.refreshToken);
            localStorage.setItem("token", response.data.token);
            return api.request(originalRequest);
        } catch (e) {
            console.log(e);
        }
    }
    throw error;
});

export default api;