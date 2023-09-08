import { createContext } from "react";

export const initialState = { theme: "light", data: [] };

export const GlobalContext = createContext({});

export const ContextProvider = ({ children }) => {
  
  const themes = {
    light: {
      font: 'black',
      background: 'white'
    },
    dark: {
      font: 'white',
      background: 'black'
    }
  };

  const value = {
    themes,
    initialState,
  };

  return (
    <GlobalContext.Provider value={{value}}>
      {children}
    </GlobalContext.Provider>
  );
};

