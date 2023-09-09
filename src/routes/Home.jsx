import React, {useContext} from 'react';
import Card from '../components/Card'
import { GlobalContext } from "../components/utils/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { value } = useContext(GlobalContext);

  return (
    <main className={value.state.theme === 'light' ? '' : 'dark'} >
      <h1>Home</h1>
      <div className='card-grid'>
        <Card />
      </div>
    </main>
  )
}

export default Home;