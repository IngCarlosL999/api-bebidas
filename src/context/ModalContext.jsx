import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Crear Context
export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [idReceta, setIdReceta] = useState(null);
  const [open, setOpen] = useState(false);
  const [saveRecetaId, setSaveRecetaId] = useState({});
  const [loading, setLoading] = useState(false); // Estado de carga

  // Una vez se tiene el id, se llama a la API con useEffect
  useEffect(() => {
    const obtenerRecetaPorId = async () => {
      if (!idReceta) return;
      setLoading(true); // Iniciar carga
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
      const resultado = await axios.get(url);
      setSaveRecetaId(resultado.data.drinks[0]);

      // Simular un retraso de 1 segundo
      setTimeout(() => {
        setLoading(false); // Finalizar carga después de 1 segundo
      }, 1000);
    };
    obtenerRecetaPorId();
  }, [idReceta]);

  return (
    <ModalContext.Provider
      value={{
        setIdReceta,
        open,
        setOpen,
        saveRecetaId,
        loading,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
