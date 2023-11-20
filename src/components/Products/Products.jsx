import { useEffect, useState } from 'react';
import { fetchProducts } from '../../api/fetchProducts';
import './_Products.scss';

export const Products = () => {
    const [products, setProducts] = useState([]);

    const getProductsData = async () => {
        const data = await fetchProducts();

        setProducts(data);
    };

    useEffect(() => {
        getProductsData();
    }, []);

    return (
        <section className="products">
            {products && products.map(product => <p key={product.id}>{product.title}</p>)}
        </section>
    );
};
