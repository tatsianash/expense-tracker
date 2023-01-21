import React, { createContext, useReducer } from 'react';
import { FCC } from '../utility.ts/types';
import { AppReducer } from './AppReducer';

export interface Transaction {
  id: number;
  text: string;
  amount: number;
}
export type State = Transaction[];

const initialState: State = [];
//create context
export const GlobalContext = createContext({
  transactions: initialState,
  deleteTransaction: (state: number) => {},
  addTransaction: (transaction: Transaction) => {},
});

//Provider component
export const GlobalProvider: FCC = ({ children }) => {
  //createreducer
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id: number) {
    dispatch({ type: 'deleteTransaction', payload: { id } });
  }

  function addTransaction(newTransaction: Transaction) {
    dispatch({ type: 'addTransaction', payload: { newTransaction } });
  }

  return (
    <GlobalContext.Provider
      value={{ transactions: state, addTransaction, deleteTransaction }}>
      {children}
    </GlobalContext.Provider>
  );
};
