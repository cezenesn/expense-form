import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [newTitle, setNewTitle] = useState('')
    const [newAmount, setNewAmount] = useState('')
    const [newDate, setNewDate] = useState('')

    const titleChangeHandler = (event) => {
        return setNewTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        return setNewAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        return setNewDate(event.target.value)
    }
    const submitHandler = event => {
        event.preventDefault();
        const expenseData= {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
        }
        props.saveData(expenseData)
        setNewTitle('');
        setNewAmount('');
        setNewDate('');
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls" >
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={newTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={newAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={newDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            {/* <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div> */}
        </form>
    )
}

export default ExpenseForm;