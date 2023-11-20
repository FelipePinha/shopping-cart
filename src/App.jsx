import { Cart } from './components/Cart/Cart';
import { Header } from './components/Header/Header';
import { Products } from './components/Products/Products';
import { CartProvider } from './contexts/CartContext';

function App() {
    return (
        <CartProvider>
            <Header />
            <Products />
            <Cart />
        </CartProvider>
    );
}

export default App;
