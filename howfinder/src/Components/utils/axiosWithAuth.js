import axios from "axios";


var token = localStorage.getItem('token');

export const axiosWithAuth = () => {
    token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'http://localhost:3300/api/auth',
        headers: {
            Authorization: token
        }
    });
};

export const axiosWithoutAuth = () => {
    token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'http://localhost:3300/api',
        headers: {
            Authorization: token
        }
    });
};