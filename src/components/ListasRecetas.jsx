import { useContext } from "react";
import { RecetasContext } from "../context/RecetasContext";
import Receta from "./Receta";

const ListasRecetas = () => {
  //extraer Recetas Context
  const { guardarRecetas } = useContext(RecetasContext);

  return (
    <div className="row mt-5">
      {guardarRecetas.map((receta) => (
        <Receta receta={receta} key={receta.idDrink} />
      ))}
    </div>
  );
};

export default ListasRecetas;
