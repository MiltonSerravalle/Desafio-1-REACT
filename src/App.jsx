import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App(props) {
  return (
    <BrowserRouter>
      <div className="appBody">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:idCategoria"
            element={<ItemListContainer />}
          />
          <Route path="/item/:idProducto" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
