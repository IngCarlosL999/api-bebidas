import { useEffect, createContext, useState } from "react";
import axios from "axios";

//Creamos el context
export const CategoriasContext = createContext();

//cada vez que creas un context se debe de crear un Provider, es donde se encuentran las funciones y el state
const CategoriasProvider = ({ children }) => {
  //crear el state categorias
  const [categorias, setCategorias] = useState([]);

  //ejecutar el llamado a la api con useEffect
  useEffect(() => {
    const obtnerCategorias = async () => {
      const apiURL =
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const categorias = await axios.get(apiURL);
      setCategorias(categorias.data.drinks);
    };
    obtnerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider
      value={{
        categorias,
      }}
    >
      {children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
