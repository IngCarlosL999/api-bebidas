import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = () => {
  const { open, setOpen, saveRecetaId, loading } = useContext(ModalContext); // Extraer valores del contexto

  const handleClose = () => setOpen(false); // Función para cerrar el modal

  const mostrarIngredientes = () => {
    let ingredientes = [];
    for (let i = 1; i <= 15; i++) {
      const ingrediente = saveRecetaId[`strIngredient${i}`];
      const medida = saveRecetaId[`strMeasure${i}`];

      if (ingrediente) {
        ingredientes.push(
          <li key={i}>
            {ingrediente} {medida ? medida : ""}{" "}
          </li>
        );
      }
    }
    return ingredientes;
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {loading ? ( // Verifica si está cargando
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <>
            <h1 className="text-center">{saveRecetaId.strDrink}</h1>
            <p>{saveRecetaId.strInstructions}</p>
            <img
              src={saveRecetaId.strDrinkThumb}
              alt={saveRecetaId.strDrink}
              className="img-fluid"
            />
            <h2 className="text-center mt-2">Ingredientes</h2>
            <ul>{mostrarIngredientes()}</ul>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default BasicModal;

// <Typography id="modal-modal-title" variant="h6" component="h2">
// {saveRecetaId.strDrink}
// </Typography>
// <Typography id="modal-modal-description" sx={{ mt: 2 }}>
// Instrucciones: {saveRecetaId.strInstructions}{" "}
// {/* Muestra las instrucciones */}
// </Typography>

// {saveRecetaId.strDrinkThumb && (
// <img
//   src={saveRecetaId.strDrinkThumb}
//   alt={`Imagen de ${saveRecetaId.strDrink}`}
//   style={{ width: "100%", marginTop: "10px" }} // Muestra la imagen de la bebida
// />
// )}
