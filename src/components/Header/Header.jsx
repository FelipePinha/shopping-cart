import { useContext } from 'react';
import { ShoppingCartSimple } from '@phosphor-icons/react';
import { CartContext } from '../../contexts/CartContext';
import './_Header.scss';

export const Header = () => {
    const { cart, setCartIsVisible } = useContext(CartContext);

    const handleControlCartVisibility = () => {
        setCartIsVisible(state => !state);
    };

    return (
        <header>
            <div className="container">
                <h1>Store</h1>
                <button className="cart-btn" onClick={handleControlCartVisibility}>
                    <ShoppingCartSimple size={40} />
                    {cart.length > 0 && <span className="cart-status">{cart.length}</span>}
                </button>
            </div>
        </header>
    );
};
