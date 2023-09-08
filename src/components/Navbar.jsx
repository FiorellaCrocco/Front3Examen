import { useContext, useState } from 'react'
import { GlobalContext, initialState } from './utils/GlobalContext'
//Este componente debera ser estilado como "dark" o "light" dependiendo 
//del theme del Context

const Navbar = () => {

  const {value} = useContext(GlobalContext)
  console.log(value.initialState)
  const [theme, setTheme] = useState(value.initialState.theme)

  const changeTheme = () => {
    // setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    theme == themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };

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

      <button onClick={() => changeTheme({theme})}>Change theme</button>
    </nav>
  )
}

export default Navbar