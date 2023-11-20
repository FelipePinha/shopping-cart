import axios from 'axios';

export const fetchProd = axios.create({
    baseURL: 'https://fakestoreapi.com/',
});
