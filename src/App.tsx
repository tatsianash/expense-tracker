import React from 'react';
import './App.css';
import { Header } from './components/ Header';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { IncomeExpenseBox } from './components/IncomeExpenseBox';
import { TransactionList } from './components/TransactionList';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenseBox />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
