import React, {useContext} from 'react';
import Form from '../components/Form'
import { GlobalContext } from "../components/utils/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { value } = useContext(GlobalContext);
  return (
    <main className={value.theme === 'light' ? '' : 'dark'} >
      <div className='card-grid'>
      <Form/>
      </div>
    </main>
  )
}

export default Contact;