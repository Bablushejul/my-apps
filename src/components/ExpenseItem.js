import ExpenseDate from './ExpepenseDate';
import './ExpenseItem.css'
function ExpenseItem(props) {
 const clickHandler=()=>{
  console.log("clicked!!!");
 }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className='expense-item_description'>
        <h2>{props.tittle}</h2>
        </div>
        <div className='expense-item_price'>${props.amount}</div>
        <button onClick={clickHandler}>Change</button>
      
    </div>
  );
}
export default ExpenseItem;
