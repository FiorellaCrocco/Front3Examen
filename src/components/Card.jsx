import {  useContext } from "react";
import { GlobalContext } from "./utils/GlobalContext";

const Card = () => {

  const { value } = useContext(GlobalContext);

  const addFav = (newItem) => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const newFav = [...favoritos, newItem];

    if (!favoritos.some((item) => item.id === newItem.id)) {
      localStorage.setItem("favoritos", JSON.stringify(newFav));
    }
  }

  return (
    <div className="card">
      {value.state.data.map((item) => (
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
