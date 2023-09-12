import React, {useContext} from 'react';
import { GlobalContext } from '../components/utils/GlobalContext';
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { value } = useContext(GlobalContext);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  //  const {value} = useContest(GlobalContext);

  const datos = JSON.parse(localStorage.getItem('item'))
  console.log(typeof datos);
  console.log(datos);

  const { id } = useParams();
  //const item = datos.find((dato) => dato.id.toString() === id);
  const item = datos

  console.log(typeof item);

  return (
    <main className={value.theme === 'light' ? '' : 'dark'}  >
      <div className="card" >
        <h1>hola</h1>
        <p>{item.name}</p>
        <p>{item.email}</p>
        <p>{item.phone}</p>
        <p>{item.website}</p>
      </div>
    </main>
  )
}

export default Detail