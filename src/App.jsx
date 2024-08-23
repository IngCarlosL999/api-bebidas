import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListasRecetas from "./components/ListasRecetas";

import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";
import ModalProvider from "./context/ModalContext";
import Modal from "./components/Modal";

const App = () => {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListasRecetas />
          </div>
          <Modal />
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
};

export default App;
