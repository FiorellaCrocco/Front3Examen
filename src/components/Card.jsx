import React, { useContext } from "react";
import { GlobalContext } from "./utils/GlobalContext";
import { useNavigate  } from "react-router-dom";

const Card = () => {
  const { value } = useContext(GlobalContext);
  const navigate = useNavigate();

  const addFav = (newItem) => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const newFav = [...favoritos, newItem];

    if (!favoritos.some((item) => item.id === newItem.id)) {
      localStorage.setItem("favoritos", JSON.stringify(newFav));
    }
  };

  const handleClick = (item) => {
    // Redirige al usuario a la página de detalle con el ID correspondiente
    console.log(item.id);
    localStorage.setItem("item", JSON.stringify(item)); 
    navigate(`/dentist/${item.id}`);
  };

  return (
    <div className="card">
      {value.state.data.map((item) => (
        <div>
        <div key={item.id} className="card" onClick={() => handleClick(item) }>
          <h2>{item.name}</h2>
          <p>{item.username}</p>
          </div>
          <button className="favButton" onClick={() => addFav(item)}>Add fav</button>
        </div>
      ))}
    </div>
  );
};

export default Card;

