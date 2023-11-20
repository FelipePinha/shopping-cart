import { fetchProd } from './axios';

export const fetchProducts = async () => {
    const res = await fetchProd.get('/products');
    const data = await res.json();

    return data;
};
