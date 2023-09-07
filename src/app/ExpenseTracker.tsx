"use client"
import { useState } from 'react';

const ExpenseTracker = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>('');
  const [transactionHistory, setTransactionHistory] = useState<number[]>([]);

  const handleIncomeClick = () => {
    const amount = parseFloat(userInput.trim());
    if (!isNaN(amount)) {
      setTotalAmount((prevTotalAmount) => prevTotalAmount + amount);
      setUserInput('');
      // Add the transaction to the history
      setTransactionHistory((prevHistory) => [...prevHistory, amount]);
    } else {
      alert('Please enter a valid number.');
    }
  };

  const handleExpenseClick = () => {
    const amount = parseFloat(userInput.trim());
    if (!isNaN(amount)) {
      setTotalAmount((prevTotalAmount) => prevTotalAmount - amount);
      setUserInput('');
      // Add the negative transaction to the history
      setTransactionHistory((prevHistory) => [...prevHistory, -amount]);
    } else {
      alert('Please enter a valid number.');
    }
  };

  return (
    <div className="container">
      <div className="box">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <span className="btn">
          <button onClick={handleIncomeClick}>Income</button>
          <button onClick={handleExpenseClick}>Expense</button>
        </span>
        <p className="output">${totalAmount}</p>
      </div>
      <div className="history">
        <h2>History</h2>
        <ul className="data">
          {transactionHistory.map((transaction, index) => (
            <li key={index}>${transaction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseTracker;
