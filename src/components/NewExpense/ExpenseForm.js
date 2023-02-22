import React from "react";
import "./ExpenseForm.css"

const ExpenseForm=()=>{
    const tittleChangeHandler=(event)=>{
        console.log(event.target.value);
    }
    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <lable>Tittle</lable>
                    <input type="text" onChange={tittleChangeHandler} /> 
                </div>
                <div className="new-expense__control">
                    <lable>Amount</lable>
                    <input type="number" min="0.01" step="0.01" /> 
                </div>
                <div className="new-expense__control">
                    <lable>Date</lable>
                    <input type="date" min="2019-01-01" max="2023-12-31" /> 
                </div>
            </div>
            <div className="new-expense_actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;