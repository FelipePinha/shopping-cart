import { ShoppingCart } from '@phosphor-icons/react';
import './_ProductCard.scss';

export const ProductCard = ({ product }) => {
    return (
        <section className="product-card">
            <img src={product.image} alt="product" />

            <div className="product-card-info">
                <h2 className="product-card-price">$ {product.price}</h2>
                <h2 className="product-card-title">{product.title}</h2>
            </div>

            <button className="add-cart-btn">
                <ShoppingCart size={32} />
            </button>
        </section>
    );
};
