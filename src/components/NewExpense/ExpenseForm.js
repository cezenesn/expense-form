import React, { useState, useEffect } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const localData = localStorage.getItem("ls_nome");
  const [newTitle, setNewTitle] = useState(localData);
  const [newAmount, setNewAmount] = useState('');
  const [newDate, setNewDate] = useState("");

  const titleChangeHandler = (event) => {
    return setNewTitle(event.target.value);
  };

  const amountChangeHandler = (e) => {
     return setNewAmount(e.target.value) 
  };
  const dateChangeHandler = (event) => {
    return setNewDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };
    props.saveData(expenseData);
    setNewTitle(localData);
    setNewAmount("");
    setNewDate("");
  };

  const armazenar = (chave, valor) => {
    localStorage.setItem(chave, valor);
    setNewTitle(valor)
  };

  const deletar = (chave) => {
    localStorage.removeItem(chave);
    setNewTitle("")
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={newTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={newAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={newDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={() => armazenar("ls_nome", newTitle)}>
          Adicionar Expense
        </button>
        <button onClick={() => deletar("ls_nome", newTitle)}>
          Deletar Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
