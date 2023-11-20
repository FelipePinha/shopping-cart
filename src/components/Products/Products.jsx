import { useEffect, useState } from 'react';
import { fetchProducts } from '../../api/fetchProducts';
import './_Products.scss';
import { ProductCard } from '../ProductCard/ProductCard';

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
            {products &&
                products.map(product => <ProductCard key={product.id} product={product} />)}
        </section>
    );
};
