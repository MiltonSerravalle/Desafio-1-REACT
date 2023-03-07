import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../utils/gFetch";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const queryCollections = collection(db, "productos");

    const queryFilter = idCategory
      ? query(queryCollections, where("categoria", "==", idCategory))
      : queryCollections;

    getDocs(queryFilter)
      .then((resp) => {
        setProductos(
          resp.docs.map((product) => ({ id: product.id, ...product.data() }))
        );
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [idCategory]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="container d-flex flex-wrap justify-content-evenly">
      {loading ? <Loader /> : <ItemList productsArray={productos} />}
    </div>
  );
};
export default ItemListContainer;
