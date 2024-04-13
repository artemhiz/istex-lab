import { tours } from "./data";
import Item from "./item";

export default function Tours() {
    return <div className="tours">
        {tours.map(({id, name, description, days, time, price}) => {
            return <Item id={id} name={name} description={description} days={days} time={time} price={price}/>
        })}
    </div>
}