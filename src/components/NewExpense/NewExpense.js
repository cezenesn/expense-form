import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {

        const saveDataHandler = (newExpenseData) => {
            const expenseData = {
                ...newExpenseData,
                id: Math.random().toString()
            }
            props.addExpense(expenseData)
        }
    
    return (
        <div className="new-expense">
            <ExpenseForm saveData={saveDataHandler}/>

        </div>
    )
}

export default NewExpense;