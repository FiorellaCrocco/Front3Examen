import React, { useContext } from "react";
import { GlobalContext } from "./utils/GlobalContext";

const Card = ({ datos }) => {
  //const { value } = useContext(GlobalContext);

  const addFav = (newItem) => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const newFav = [...favoritos, newItem];

    if (!favoritos.some((item) => item.id === newItem.id)) {
      localStorage.setItem("favoritos", JSON.stringify(newFav));
    }
  };

//  console.log(datos);

  return (
    <div className="card">
      {datos.map((item) => (
        <div key={item.id}>
          <div className="card">
            <h2>{item.name}</h2>
            <p>{item.username}</p>
          </div>
          <button className="favButton" onClick={() => addFav(item)}>
            Add fav
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
