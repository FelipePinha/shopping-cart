import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartIsVisible, setCartIsVisible] = useState(false);

    const addItemToCart = item => {
        setCart([...cart, item]);
    };

    return (
        <CartContext.Provider value={{ cart, addItemToCart, cartIsVisible, setCartIsVisible }}>
            {children}
        </CartContext.Provider>
    );
};
