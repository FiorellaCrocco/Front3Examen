import React, { useContext } from "react";
import { GlobalContext } from "../components/utils/GlobalContext";

const Fav = () => {
  const { value } = useContext(GlobalContext);

  const datos = JSON.parse(localStorage.getItem("favoritos")) || [];

  return (
    <main className={value.theme === "light" ? "" : "dark"}>
      <h1>Mis favoritos</h1>
      <div className="card-grid">
        {datos.map((item) => (
          <div key={item.id}>
            <div className="card">
            <img src="./public/images/doctor.jpg" className="card-img"/>
              <h3>{item.name}</h3>
              <p>{item.username}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Fav;
