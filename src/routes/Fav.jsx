import React, {useContext} from 'react';
import Card from "../components/Card";
import { GlobalContext } from "../components/utils/GlobalContext";


const Fav = () => {
  const { value } = useContext(GlobalContext);
  return (
    <main className={value.theme === 'light' ? '' : 'dark'}  >
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </main>
  );
};

export default Fav;