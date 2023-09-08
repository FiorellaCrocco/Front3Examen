import React from "react";
import { useState } from "react";

const Form = ({ mostrarDatos }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [msgError, setMsgError] = useState("");
  const [msgSucess, setMsSucess] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();

    if(nombre.length < 6 || !email.includes('@') || !email.includes('.com')){
        setMsgError("Por favor verifique su información nuevamente");
        return;
    } else {
        mostrarDatos(nombre, email), setNombre(""), setEmail(""), setMsgError(""), setMsSucess(`Gracias ${nombre}, te contactaremos cuanto antes vía mail`)
        
    }
  }

  return (
    <div>
      <form onSubmit={handlerSubmit}  className='form'>
        <h2>Ingrsa tus datos y nos contactaremos a la brevedad</h2>
        <label>
          <p>Ingrese su nombre completo:</p>
          <input
            placeholder="Ingrese su nombre"
            type="text"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </label>
        <label>
          <p>Ingrese su email:</p>
          <input
            placeholder="Ingrese su email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <button type="submit" className="btn">Enviar</button>
      </form>
        {msgError ? <p id="error">{msgError}</p> : <p>{msgSucess}</p>}
    </div>
  );
};

export default Form;