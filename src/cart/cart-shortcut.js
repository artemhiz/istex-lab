import { useSelector, useDispatch } from 'react-redux';
import { cartOpen, getCart, getCartOpening } from '../store/cart-slice';
import { useEffect, useState } from 'react';

export default function CartShortcut() {
    const cart = useSelector(getCart);
    const cartOpening = useSelector(getCartOpening);
    const [ending, setEnding] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        if (cart.length >= 10 && cart.length <= 20) {
            setEnding('ов')
        } else if (cart.length % 10 === 1) {
            setEnding('');
        } else if (2 <= (cart.length % 10) && (cart.length % 10) <= 4 && (cart.length % 10) !== 0) {
            setEnding('а')
        } else if ((5 <= (cart.length % 10) && (cart.length % 10) <= 9) || (cart.length % 10) === 0) {
            setEnding('ов')
        }
    }, [cart])

    return <div className={"cart-shortcut" + (cartOpening ? " closed" : "")} onClick={() => dispatch(cartOpen())}>
        <h2>В вашей корзине {cart.length === 0 ? "пока нет" : cart.length} тур{ending}</h2>
    </div>
}