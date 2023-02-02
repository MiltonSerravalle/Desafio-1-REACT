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
    <center>
      {loading ? (
        <h3>-- Cargando --</h3>
      ) : (
        productos.map((producto) => (
          <div className="card" key={producto.id}>
            <div className="cardHeader">Nombre : {producto.name}</div>
            <div className="cardBody">
              <img className="cardImg" src={producto.foto}></img>
              Categoria: {producto.category} <br />
              Precio: {producto.price}
            </div>
          </div>
        ))
      )}
    </center>
  );
};
export default ItemListContainer;
