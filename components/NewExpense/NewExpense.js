import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const [formOpen, setFormOpen] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    closeNewExpenseFormHandler();
  };

  const openNewExpenseFormHandler = () => {
    setFormOpen(true);
  };

  const closeNewExpenseFormHandler = () => {
    setFormOpen(false);
  };

  return (
    <div className="new-expense">
      {!formOpen ? (
        <button onClick={openNewExpenseFormHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClose={closeNewExpenseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
