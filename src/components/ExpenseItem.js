import React, {useState} from 'react';
import ExpenseDate from './ExpepenseDate';
import './ExpenseItem.css'
const ExpenseItem=(props)=> {
  const [tittle,setTittle]=useState(props.tittle);
  console.log('ExpenseItem Evalutaed By React');
 const clickHandler=()=>{
  setTittle('updated!')
  console.log(tittle);
 }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className='expense-item_description'>
        <h2>{tittle}</h2>
        </div>
        <div className='expense-item_price'>${props.amount}</div>
        <button onClick={clickHandler}>Change</button>
      
    </div>
  );
}
export default ExpenseItem;
