import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Importamos nuestros componentes
import { Show } from "./components/Show";
import { Edit } from "./components/Edit";
import { Create } from "./components/Create";

// Importamos el Router

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  //  Aqui va Funciones
  Create;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Show />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
