import { createContext, useContext, useReducer } from "react";

// this is the data layer
export const StateContext = createContext();

// buiuld a provider
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);