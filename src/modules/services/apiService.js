import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const loginAPI = async (email, password) => {
    return await axios.post(`${API_BASE_URL}/users/login`, { email, password });
};
