import React from "react";

import './ExpenseFilter.css'

const ExpenseFilter=(props)=>{
    const DropdownChangeHandler=(event)=>{
        props.onChange(event.target.value);
    };

    return(
        <div className="expense-filter">
            <div className="expense-filter_control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={DropdownChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;