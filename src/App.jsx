import { useState } from "react";
import "./App.css";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App(props) {
  return (
    <div className="appBody">
      <NavBar />
      <ItemListContainer />
      <ItemCount />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
