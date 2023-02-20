import './ExpenseItem.css'
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>20 FEB 2022</div>
      <div className='expense-item_description'>
        <h2>car insurance</h2>
        <div className='expense-item_price'>$50</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
