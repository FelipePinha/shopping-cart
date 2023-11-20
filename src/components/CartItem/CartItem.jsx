import { Minus, ShoppingCartSimple } from '@phosphor-icons/react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './_CartItem.scss';

export const CartItem = ({ product }) => {
    const { removeItemOfCart } = useContext(CartContext);

    const handleRemoveItem = () => {
        removeItemOfCart(product.id);
    };

    return (
        <section className="cart-item">
            <img src={product.image} alt="imagem do produto" />

            <div className="cart-item-content">
                <h3 className="cart-item-title">{product.title}</h3>
                <h3 className="cart-item-price">$ {product.price}</h3>

                <button className="remove-item-btn" onClick={handleRemoveItem}>
                    <Minus />
                    <ShoppingCartSimple size={20} />
                </button>
            </div>
        </section>
    );
};
