import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem";
import ExpenseFilter from "../ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const FilterYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let expensecontent=<p>No expense found</p>;

  if(FilterYear.length>0){expensecontent=FilterYear.map((expense) => (
    <ExpenseItem
      key={expense.id}
      tittle={expense.tittle}
      amount={expense.amount}
      date={expense.date}
    />
  ))}
const filteredExpenses=props.items.filter((expense)=>{
  return expense.date.getFullYear().toString()===filteredYear;
})

  return (
    <div className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onChange={filterChangeHandler}
      />
      {expensecontent}
      <ExpensesChart expense={filteredExpenses}/>
    </div>
  );
};
export default Expenses;
