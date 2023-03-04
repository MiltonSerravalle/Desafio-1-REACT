import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { CartContextProvider } from "./Context/CartContext";
import Cart from "./components/Cart/Cart";

function App(props) {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="appBody">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />}/>
            <Route path="/item/:idProducto" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
