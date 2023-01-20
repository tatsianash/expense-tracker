import React, { createContext, useReducer, PropsWithChildren } from 'react';
import { FCC } from '../utility.ts/types';
import { AppReducer } from './AppReducer';

export interface Transaction {
  id: number;
  text: string;
  amount: number;
}
export type State = Transaction[];

const initialState = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 },
];

//create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider: FCC = ({ children }) => {
  //createreducer
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};
