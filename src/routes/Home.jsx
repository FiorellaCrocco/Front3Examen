import React, {useContext, useEffect, useState} from 'react';
import Card from '../components/Card'
import { GlobalContext } from "../components/utils/GlobalContext";
//import { Link } from "react-router-dom";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { value } = useContext(GlobalContext);
/*
  const [dato, setDato] = useState({})

  useEffect(() => {
    setDato(JSON.parse(localStorage.getItem('item')));
    console.log(dato);
  }, [])
*/
  return (
    <main className={value.state.theme === 'light' ? '' : 'dark'} >
      <h1>Home</h1>
      <div className='card-grid'>
        <Card>
         {/* <Link to={`dentist/`} /> */}
        </Card>
      </div>
    </main>
  )
}

export default Home;