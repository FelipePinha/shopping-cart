import { useContext, useState } from 'react';
import { CartItem } from '../CartItem/CartItem';
import { CartContext } from '../../contexts/CartContext';
import './_Cart.scss';

export const Cart = () => {
    const { cart, cartIsVisible } = useContext(CartContext);
    const totalValue = cart.reduce((acc, item) => item.price + acc, 0);

    return (
        <section className={`cart ${cartIsVisible ? 'cart-active' : ''}`}>
            <div className="cart-items">
                {cart.map(item => (
                    <CartItem key={item.id} product={item} />
                ))}
            </div>

            <div className="cart-value">Valor Total: {totalValue.toFixed(2)}</div>
        </section>
    );
};
