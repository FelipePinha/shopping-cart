import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartIsVisible, setCartIsVisible] = useState(false);

    const addItemToCart = item => {
        setCart([...cart, item]);
    };

    const removeItemOfCart = id => {
        const newCartItems = cart.filter(item => item.id !== id);

        setCart(newCartItems);
    };

    return (
        <CartContext.Provider
            value={{ cart, addItemToCart, removeItemOfCart, cartIsVisible, setCartIsVisible }}
        >
            {children}
        </CartContext.Provider>
    );
};
