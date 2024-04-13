import remove from '../media/icons/delete.png';
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../store/cart-slice';

export default function Item({id, name, price}) {
    const dispatch = useDispatch();

    return <div className="item">
        <h3 className="id">{id}</h3>
        <h2 className="name">{name}</h2>
        <p className='price'>{price}$</p>
        <button className="remove" onClick={() => dispatch(removeFromCart(id))}>
            <img src={remove} alt='Удалить'/>
        </button>
    </div>
}