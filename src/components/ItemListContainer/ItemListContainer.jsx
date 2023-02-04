import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { gFetch } from "../../utils/gFetch";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategoria } = useParams();

  useEffect(() => {
    if (idCategoria) {
      gFetch()
        .then((res) => {
          setProductos(
            res.filter((producto) => producto.categoria === idCategoria)
          );
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
  return loading ? (
    <h3>-- Cargando --</h3>
  ) : (
    <div className="cardContainer">
      {productos.map((producto) => (
        <div key={producto.id} className="card">
          <Link to={`/item/${producto.id}`}>
            <div className="cardBody">
              <h3>{producto.name}</h3>
              <img className="cardImg" src={producto.foto}></img>
              <div className="cardDetail">
                <p>Categoria: {producto.categoria}</p>
                <p>Precio: {producto.precio}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default ItemListContainer;
