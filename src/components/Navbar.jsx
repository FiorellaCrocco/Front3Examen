import { useContext, useEffect } from "react";
import { GlobalContext } from "./utils/GlobalContext";
import { Link } from "react-router-dom";
//import "../styles/Navbar.css";

const Navbar = () => {

//  const { value } = useContext(GlobalContext);
 // console.log(value.initialState);
  
  // Reducer para manejar el estado del tema
/*  const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};*/
  // Definir el estado inicial del tema
 // const initialTheme = value.initialState.theme || "light";

   const { value } = useContext(GlobalContext);

   console.log(value.state);

  // Función para cambiar el tema
  const changeTheme = () => {
    value.dispatch({ type: "TOGGLE_THEME" });
  };

  // useEffect para guardar el tema en el almacenamiento local
  useEffect(() => {
    localStorage.setItem("theme", value.state.theme);
  }, [value.state.theme]);
  
 // console.log(value.state);
  // Definir el reducer para manejar el estado del tema
 // const [theme, dispatch] = useReducer(themeReducer, initialTheme);

/*
  useEffect(() => {
     document.body.classList.toggle("dark-mode", state.theme === "dark");
   }, [state.theme]);
*/

  return (
    <nav>
      {/*       
      <Link>Dentist</Link>
      <Link>Contact</Link>
      <Link>Favorites</Link> 
      */}

      <p>Dentist</p>
      <p>Contact</p>
      <p>Favorites</p>

      <button onClick={changeTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
