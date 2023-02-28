import { Link } from "react-router-dom";
//import "./Item.css";

const Item = ({ element }) => {
  const {
    id: id,
    name: nombre,
    precio: precio,
    foto: foto,
    categoria: categoria,
  } = element;
  return (
    
      <Link to={`/item/${id}`} key={id} style={{textDecoration: 'none'}}>
        <div className="card  mt-5 text-bg-secondary mb-3" style={{width: "18rem"}}>

          <img className="card-img-top " src={foto}></img>
          <div className="card-body d-flex flex-column align-items-center">
          <h4 className="card-title">{nombre}</h4>
            <p className="card-text">{categoria}</p>
            <p className="card-text">AR$ : {precio}</p>
          </div>
        </div>
      </Link>
    
  );
};

export default Item;
