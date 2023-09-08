import { useState , useContext } from "react";
import { GlobalContext } from './utils/GlobalContext'

const Card = ({ name, username, id }) => {

  
  const {value} = useContext(GlobalContext)
  console.log(value.initialState)

  const [data, setData] = useState(value.initialState.data);

  const addFav = (newItem)=>{
    setData((prevData) => [...prevData, newItem]);
    localStorage.setItem('favoritos', data);
  }

  return (
    <div className="card">
      
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
        <h1>name</h1>
        <p>username</p>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;