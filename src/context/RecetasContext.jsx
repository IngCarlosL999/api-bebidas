import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = ({ children }) => {
  const [guardarRecetas, setGuardarRecetas] = useState([]);

  const [buscarRecetas, setBuscarRecetas] = useState({
    nombre: "",
    categoria: "",
  });

  const [consultar, setConsultar] = useState(false);

  const { nombre, categoria } = buscarRecetas;

  useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;

        const resultado = await axios.get(url);
        setGuardarRecetas(resultado.data.drinks);
      };
      obtenerRecetas();
    }
  }, [buscarRecetas]);

  return (
    <RecetasContext.Provider
      value={{
        setBuscarRecetas,
        setConsultar,
        guardarRecetas,
      }}
    >
      {children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
