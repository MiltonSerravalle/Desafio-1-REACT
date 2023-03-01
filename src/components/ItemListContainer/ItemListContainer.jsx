import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../utils/gFetch";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";


export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  // useEffect(() => {
  //   if (idCategoria) {
  //     gFetch()
  //       .then((res) => {
  //         setProductos(
  //           res.filter((producto) => producto.categoria === idCategoria)
  //         );
  //       })
  //       .catch((error) => console.log(error))
  //       .finally(() => setLoading(false));
  //   } else {
  //     gFetch()
  //       .then((res) => {
  //         setProductos(res);
  //       })
  //       .catch((error) => console.log(error))
  //       .finally(() => setLoading(false));
  //   }
  // }, [idCategoria]);

  return (
    <div className="container d-flex flex-wrap justify-content-evenly">
      {loading ? 
        <Loader />
       :
        <ItemList arregloProds={productos} />
      }
    </div>
  );
};
export default ItemListContainer;
