import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ arregloProds }) => {
  return (
    <>
      {arregloProds.map((producto) => {
        return (
          <div key={producto.id} className="card">
            <Item element={producto} />
          </div>
        );

        console.log(ItemList);
      })}
    </>
  );
};

export default ItemList;
