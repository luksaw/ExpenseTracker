import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const selectedYearDataHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredYear = items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          value={selectedYear}
          selected={selectedYear}
          onYearSelected={selectedYearDataHandler}
        />
        <ExpensesChart expenses={filteredYear} />
        <ExpensesList items={filteredYear} />
      </Card>
    </div>
  );
};

export default Expenses;
