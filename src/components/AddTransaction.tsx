import { useContext, useState, MouseEvent } from 'react';
import { GlobalContext } from '../context/GlobalState';

export function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0.0);

  const { addTransaction, transactions } = useContext(GlobalContext);

  const handleAdd = (e: MouseEvent) => {
    e.preventDefault();
    function generateID() {
      return Math.floor(Math.random() * 100000000);
    }
    addTransaction({ id: generateID(), text, amount });
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" onClick={(e) => handleAdd(e)}>
          Add transaction
        </button>
      </form>
    </>
  );
}
