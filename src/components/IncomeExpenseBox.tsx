import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export function IncomeExpenseBox() {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .map((i) => i.amount)
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    transactions
      .map((i) => i.amount)
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </div>
  );
}
