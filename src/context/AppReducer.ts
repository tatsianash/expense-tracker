import { State } from './GlobalState';

interface Transaction {
  text: string;
  amount: number;
}
type Action = { type: 'addTransaction'; payload: { transaction: Transaction } };

export function AppReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'addTransaction':
      return state;
  }
  return state;
}
