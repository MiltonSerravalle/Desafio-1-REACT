import React from "react";
import Item from "../Item/Item";


const ItemList = ({ arregloProds }) => {
  return (
    <>
      {arregloProds.map((producto) => {
        return (
          <div key={producto.id}>
            <Item element={producto} />
          </div>
        );

        console.log(ItemList);
      })}
    </>
  );
};

export default ItemList;
