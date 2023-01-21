import { State, Transaction } from './GlobalState';

type Action =
  | { type: 'addTransaction'; payload: { newTransaction: Transaction } }
  | { type: 'deleteTransaction'; payload: { id: number } };

export function AppReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'addTransaction':
      return [...state, action.payload.newTransaction];
    case 'deleteTransaction':
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}
