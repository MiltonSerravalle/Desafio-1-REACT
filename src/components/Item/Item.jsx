import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ element }) => {
  const {
    id: id,
    nombre: nombre,
    precio: precio,
    foto: foto,
    categoria: categoria,
  } = element;
  return (
    <div key={id}>
      <Link to={`/item/${id}`}>
        <div className="cardBody">
          <h3>{nombre}</h3>
          <img className="cardImg" src={foto}></img>
          <div className="cardDetail">
            <p>Categoria: {categoria}</p>
            <p>Precio: {precio}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
