import ExpenseDate from '../expanse-date/expanse-date';
import Card from '../card/card';

import './ExpanseItem.css';

const ExpansItem =(props) =>{
    return(
    <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick>Delete</button>

    </Card>

    );
}
export default ExpansItem;