import React, { useContext, useReducer } from "react";
import { formatOperand, reducer, initialState, ACTIONS } from "./reducer";

const AppContext = React.createContext();

export function AppProvider({ children }) {
  //state parameter is given variables for the different ops
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currOperation, prevOperation, operation } = state;

  //dispatch function takes in the type of action and the digit value
  //reducer contains a state and an action(given two variables)
  return (
    <AppContext.Provider
      value={{
        currOperation,
        prevOperation,
        operation,
        formatOperand,
        dispatch,
        ACTIONS,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
