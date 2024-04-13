import { useDispatch } from 'react-redux';
import calendar from '../media/icons/calendar.png';
import clock from '../media/icons/clock.png';
import { addToCart } from '../store/cart-slice';

export default function Item({id, name, description, days, time, price}) {
    const dispatch = useDispatch();

    return <div className="item" key={id}>
        {/* Название карточки с её айди и описанием */}
        <h4 className='name'>{name}</h4>
        <h4 className={"id" + (id === "T1" ? " too-big" : "")}>{id}</h4>
        <div className="description">
            {description}
        </div>
        <div className="info">
            {/* Здесь начинается информационная часть карточки (время, дни, цена) */}
            <div className="days-and-time">
                <div className="days">
                    <img src={calendar} alt="Дни:"/>
                    {days}
                </div>
                <div className="time">
                    <img src={clock} alt="Время:"/>
                    {time}
                </div>
            </div>
            <div className="pricetag">
                <p>{price}$/чел.</p>
                <button onClick={() => id !== "G1/G2" && dispatch(addToCart({
                    id: id,
                    name: name,
                    price: price,
                }))}>Хочу!</button>
            </div>
        </div>
    </div>
}