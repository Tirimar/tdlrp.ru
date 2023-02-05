import axios from "axios";

export const API_URL = 'https://tdlrp.ru/back'

const $api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

$api.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        config.headers.Authorization = `Bearer ${window.sessionStorage.getItem('token')}`;
        return config;
    }
})

export default $api;