import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../utils/gFetch";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { idProducto } = useParams();

  useEffect(() => {
    gFetch()
      .then((res) => {
        setItem(res.filter((producto) => producto.id === idProducto));
      })
      .catch((error) => console.log(error));
  }, [idProducto]);

  return (
    <div className="justify">
      <div className="cardBorder">
        {item.map((producto) => (
          <div className="cardItem">
            <img className="cardImg" src={producto.foto} />
            <div className="cardDetail">
              <h2>{producto.name}</h2>
              <p>Precio: {producto.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
