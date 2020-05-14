import axios from "axios";


var token = localStorage.getItem('token');

export const axiosWithAuth = () => {
    token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://howfinder.herokuapp.com/api/auth',
        headers: {
            Authorization: token
        }
    });
};

export const axiosWithoutAuth = () => {
    token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://howfinder.herokuapp.com/api',
        headers: {
            Authorization: token
        }
    });
};