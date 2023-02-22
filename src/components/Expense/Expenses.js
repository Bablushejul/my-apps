
import React from "react";
import ExpenseItem from "../ExpenseItem";
import './Expenses.css'
const Expenses=(props)=>{
    const expenses =[
        {
          id:'e1' ,tittle:'Toilet Paper',amount:94.12,date:new Date(2022,7,14)
        },
        {
          id:'e2' ,tittle:'Car Insurance',amount:76.12,date:new Date(2021,5,4)
        },
        {
          id:'e3' ,tittle:'TV',amount:294.12,date:new Date(2020,3,1)
        },
        {
          id:'e3' ,tittle:'Desk',amount:100,date:new Date(2023,2,1)
        }
      ]
    return (<div className="expenses">
      <ExpenseItem tittle={expenses[0].tittle} amount={expenses[0].amount} date={expenses[0].date} />
       <ExpenseItem tittle={expenses[1].tittle} amount={expenses[1].amount} date={expenses[1].date} />
       <ExpenseItem tittle={expenses[2].tittle} amount={expenses[2].amount} date={expenses[2].date} />
       <ExpenseItem tittle={expenses[3].tittle} amount={expenses[3].amount} date={expenses[3].date} />

    </div>)
}
 export default Expenses;