import { fetchProd } from './axios';

export const fetchProducts = async () => {
    const res = await fetchProd.get('https://fakestoreapi.com/products?limit=10');

    return res.data;
};
