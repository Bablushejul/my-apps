import './ExpenseDate.css'
function ExpenseDate(props) {
    const month =props.date.toLocaleString('en-us',{month:'long'});
    const year =props.date.toLocaleString('en-us',{day:'2-digit'});
    const day =props.date.getFullYear();
    return(
        <div className="expense-date">
            <div className="expense-date-month">{month}</div>
            <div className="expense-date-year">{year}</div>
            <div className="expense-date-day">{day}</div>
        </div>
    );

}

export default ExpenseDate;