import { useContext, useEffect } from "react";
import { GlobalContext } from "./utils/GlobalContext";
import { Link } from "react-router-dom";
//import "../styles/Navbar.css";

const Navbar = () => {

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
