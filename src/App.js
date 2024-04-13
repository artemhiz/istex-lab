import Tours from "./tours-list/tours";
import './App.css';
import CartShortcut from "./cart/cart-shortcut";
import { useSelector } from 'react-redux';
import { getCartOpening } from "./store/cart-slice";
import Cart from "./cart/cart";

export default function App() {
    const cartOpening = useSelector(getCartOpening);

    return <>
        <main>
            <h1>Туры по Стамбулу</h1>
            <Tours/>
        </main>
        <CartShortcut/>
        <Cart/>
    </>
}