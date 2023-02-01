import { useState } from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App(props) {
  return (
    <div className="appBody">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
