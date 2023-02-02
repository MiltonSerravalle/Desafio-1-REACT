import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { gFetch } from "../../utils/gFetch";

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gFetch()
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(productos);
  return (
    
      loading
      ? 
        <h3>-- Cargando --</h3>
     : 
      <div className="cardContainer">
         {productos.map(producto => 
         <div key={producto.id} className="card" >
            <div className="cardHeader">Nombre : {producto.name}</div>
            <div className="cardBody">
              <img className="cardImg" src={producto.foto}></img>
              Categoria: {producto.category} <br />
              Precio: {producto.price}
            </div>
          </div>)}
      </div>
    
  );
      };
export default ItemListContainer;
