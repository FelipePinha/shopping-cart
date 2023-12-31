import { ShoppingCart } from '@phosphor-icons/react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './_ProductCard.scss';

export const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);

    const handleAddItemToCart = () => {
        addItemToCart(product);
    };

    return (
        <section className="product-card">
            <img src={product.image} alt="product" />

            <div className="product-card-info">
                <h2 className="product-card-price">$ {product.price}</h2>
                <h2 className="product-card-title">{product.title}</h2>
            </div>

            <button className="add-cart-btn" onClick={handleAddItemToCart}>
                <ShoppingCart size={32} />
            </button>
        </section>
    );
};
