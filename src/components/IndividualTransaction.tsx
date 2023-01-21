import { useContext } from 'react';
import { GlobalContext, Transaction } from '../context/GlobalState';

interface IndProps {
  indT: Transaction;
}

export function IndividualTransaction({ indT }: IndProps): JSX.Element {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = indT.amount >= 0 ? '+' : '-';
  return (
    <li key={indT.id} className={indT.amount >= 0 ? 'plus' : 'minus'}>
      {indT.text}{' '}
      <span>
        {sign}${Math.abs(indT.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(indT.id)}>
        x
      </button>
    </li>
  );
}
