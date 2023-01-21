import { useContext } from 'react';
import ts from 'typescript';
import { GlobalContext } from '../context/GlobalState';
import { IndividualTransaction } from './IndividualTransaction';

export function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  console.log(transactions);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((ta) => (
          <IndividualTransaction indT={ta} key={ta.id} />
        ))}
      </ul>
    </>
  );
}
