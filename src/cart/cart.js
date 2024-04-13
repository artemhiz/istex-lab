import { useSelector, useDispatch } from 'react-redux';
import { addPeople, cartClose, getCart, getCartOpening, getPeople, getTotal, removePeople } from '../store/cart-slice';
import back from '../media/icons/back.png';
import Item from './item';

export default function Cart() {
    const cartOpening = useSelector(getCartOpening);
    const cart = useSelector(getCart);
    const people = useSelector(getPeople);
    const totalPrice = useSelector(getTotal);
    const dispatch = useDispatch();

    // Показывается только при нажатии на плашку корзины
    return <div className={"overlay" + (!cartOpening ? ' closed' : '')}>
        <div className='window'>
            <div className='top-bar'>
                <button onClick={() => dispatch(cartClose())}>
                    <img src={back} alt='Назад'/>
                </button>
                <h3>Корзина</h3>
            </div>
            <div className='interaction-window'>
                <div className='people-counter'>
                    <h4>Сколько вас?</h4>
                    <p>
                        <button onClick={() => dispatch(addPeople())} className={people === 10 && "unavailable"}>+</button>
                        {people}
                        <button onClick={() => dispatch(removePeople())} className={people === 1 && "unavailable"}>-</button>
                    </p>
                </div>
                <div className='cart'>
                    {cart.length === 0 ? 
                    <div className='no-item'>
                        <h3>У вас пока нет туров в корзине</h3>
                    </div> : 
                    cart.map(({id, name, price}) => {
                        return <Item id={id} name={name} price={price}/>
                    })}
                    {cart.length !== 0 && <h5 className='total'>Итого <span>{totalPrice}$</span> за {people} человек{people % 10 === 1 ? 'а' : ''}</h5>}
                </div>
            </div>
        </div>
    </div>
}