import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { gFetch } from "../../utils/gFetch";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const {idCategoria} = useParams()


  useEffect(() => {
    if(idCategoria){
      gFetch()
      .then((res) => {
        setProductos(res.filter(producto => producto.categoria === idCategoria));
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  
    } else {
    gFetch()
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    }
  }, [idCategoria]);

  console.log(productos);
  return (
    
      loading
      ? 
        <h3>-- Cargando --</h3>
     : 
      <div className="cardContainer">
         {productos.map(producto => 
         <div key={producto.id} className="card" >
            <Link to={`/detalle/${producto.id}`}>
            <div className="cardHeader">Nombre : {producto.name}</div>
            <div className="cardBody">
              <img className="cardImg" src={producto.foto}></img>
              Categoria: {producto.categoria} <br />
              Precio: {producto.price}
            </div>
            </Link>
          </div>)}
      </div>
    
  );
      };
export default ItemListContainer;
