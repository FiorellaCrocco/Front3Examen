import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ datos }) => {
  const navigate = useNavigate();

  const addFav = (newItem) => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const newFav = [...favoritos, newItem];

    if (!favoritos.some((item) => item.id === newItem.id)) {
      localStorage.setItem("favoritos", JSON.stringify(newFav));
    }
  };

  const handleClick = (item) => {
    navigate(`/dentist/${item.id}`);
  };
  //  console.log(datos);

  return (
    <div className="card-grid">
      {datos.map((item) => (
        <div key={item.id} >
          <div className="card" onClick={() => handleClick(item)}>
          <img src="./public/images/doctor.jpg" className="card-img"/>
            <h3>{item.name}</h3>
            <p>{item.username}</p>
          </div>
          <button className="favButton" onClick={() => addFav(item)}>
            Añadir a favoritos
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
