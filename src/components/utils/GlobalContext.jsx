import { createContext, useEffect, useState } from "react";

export const initialState = { theme: "light", data: [] };

export const GlobalContext = createContext({});

export const ContextProvider = ({ children }) => {
  
  const [rest, setRest] = useState('')

  async function handleFetch() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await response.json();
    setRest(data);
    
    console.log(response);
  }
  
  
  useEffect(() => {
    handleFetch()
  }, [])
  
  const updatedInitialState = { ...initialState, data: rest };

  
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
    initialState: updatedInitialState,
  };

  console.log(updatedInitialState);

  return (
    <GlobalContext.Provider value={{value}}>
      {children}
    </GlobalContext.Provider>
  );
};

