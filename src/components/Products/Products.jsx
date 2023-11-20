import { useEffect, useState } from 'react';
import { fetchProducts } from '../../api/fetchProducts';
import { ProductCard } from '../ProductCard/ProductCard';
import './_Products.scss';

export const Products = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const getProductsData = async () => {
        setIsLoading(true);
        const data = await fetchProducts();

        setProducts(data);
        setIsLoading(false);
    };

    useEffect(() => {
        getProductsData();
    }, []);

    return (
        <section className="products">
            {isLoading && <h2>Carregando...</h2>}

            {products &&
                products.map(product => <ProductCard key={product.id} product={product} />)}
        </section>
    );
};
