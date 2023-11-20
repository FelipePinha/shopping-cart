import './_Header.scss';
import { ShoppingCartSimple } from '@phosphor-icons/react';

export const Header = () => {
    return (
        <header>
            <div className="container">
                <h1>Store</h1>
                <button className="cart-btn">
                    <ShoppingCartSimple size={50} />
                    <span className="cart-status">1</span>
                </button>
            </div>
        </header>
    );
};
