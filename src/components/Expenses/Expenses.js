import { useState } from "react";
import Card from "../UI/Card.js";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart.js";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterExpensesHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterExpenses={filterExpensesHandler}
        selected={filteredYear}
      />
      <ExpensesChart expenses ={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
