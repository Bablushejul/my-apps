import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem";
import ExpenseFilter from "../ExpenseFilter";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const FilterYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {FilterYear.map((expense) => (
        <ExpenseItem
          key={expense.id}
          tittle={expense.tittle}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};
export default Expenses;
