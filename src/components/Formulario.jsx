import { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const { categorias } = useContext(CategoriasContext);
  const { setBuscarRecetas, setConsultar } = useContext(RecetasContext);

  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const [error, setError] = useState(false);

  //leer los contenidos

  const obtenerDatosReceta = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBuscarRecetas(busqueda);
    setConsultar(true);
  };

  return (
    <form className="cold-12" onSubmit={handleSubmit}>
      <fieldset className="text-center">
        <legend>Busca Bebidas Por Categoria o Ingredientes</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-5">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Buscar por Ingredientes"
            onChange={obtenerDatosReceta}
          />
        </div>
        <div className="col-md-5">
          <select
            className="form-control"
            name="categoria"
            onChange={obtenerDatosReceta}
          >
            <option value="">Selecciona Categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-2">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
