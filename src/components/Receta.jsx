import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const Receta = ({ receta }) => {
  const { setIdReceta, setOpen } = useContext(ModalContext); // Extraer valores del contexto

  const handleOpenModal = () => {
    setIdReceta(receta.idDrink); // Establecer el ID de la receta
    setOpen(true); // Abrir el modal
  };

  return (
    <div className="col-md-4 mb-3 ">
      <div className="card">
        <h2 className="card-header text-center">{receta.strDrink}</h2>
        <img
          className="card-img-top"
          src={receta.strDrinkThumb}
          alt={`Imagen de ${receta.strDrink}`}
        />
        <div className="card-body mx-auto ">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={handleOpenModal} // Cambiar aquí para abrir el modal
          >
            Ver Receta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receta;
