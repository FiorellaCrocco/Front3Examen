import { createContext, useEffect, useReducer } from "react";

// Define el estado inicial
export const initialState = { theme: localStorage.getItem('theme') || "light", data: [] };

// Crea un contexto global
export const GlobalContext = createContext({});

// Define el reducer para manejar las acciones
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      // Cuando se realiza una solicitud, actualiza el estado con los datos recibidos
      localStorage.setItem('data',  JSON.stringify(state.data))
      return { ...state, data: action.payload };
    case "TOGGLE_THEME":
      // Cambia el tema alternando entre "light" y "dark"
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem('theme', newTheme); // Almacena el nuevo tema en localStorage
      return { ...state, theme: newTheme }; // Actualiza el estado con el nuevo tema
    default:
      return state;
  }
}

// Define el componente ContextProvider que envolverá a la aplicación
export const ContextProvider = ({ children }) => {
  
  // Utiliza el hook useReducer para gestionar el estado y las acciones
  const [state, dispatch] = useReducer(reducer, initialState);

  async function handleFetch() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await response.json();
    dispatch({ type: "FETCH", payload: data });
  }
  
  // Usa el hook useEffect para fetchear los datos una vez que el componente se monta
  useEffect(() => {
    handleFetch()
  }, [])

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
  
  const value = { state, dispatch }
  console.log(state);

  return (
    <GlobalContext.Provider value={{value}}>
      {children}
    </GlobalContext.Provider>
  );
};

