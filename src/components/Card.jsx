import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "./utils/GlobalContext";

const Card = () => {
  const { value } = useContext(GlobalContext);
  const [favoritos, setFavoritos] = useState([]);
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    if (value.state.data) {
      setDatos(value.state.data);
    }
  }, [value]);

  const addFav = (newItem) => {
    if (!favoritos.some((item) => item.id === newItem.id)) {
      setFavoritos((prevData) => [...prevData, newItem]);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }
  };

  return (
    <div className="card">
      {datos.map((item) => (
        <div key={item.id} className="card">
          <h2>{item.name}</h2>
          <p>{item.username}</p>
          <button onClick={() => addFav(item)}>Add fav</button>
        </div>
      ))}
    </div>
  );
};
export default Card;
