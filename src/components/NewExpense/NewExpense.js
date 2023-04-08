import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [expand, setExpand] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const expandHandler = () => {
    setExpand(prevValue => !prevValue);
  }


  return (
    <div className="new-expense">
      {!expand && <button onClick={expandHandler}>Add New Expense</button>}
      {expand && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={expandHandler} />)}
    </div>
  );
};

export default NewExpense;
