import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import Loader from '../Loader/Loader';

 

const ItemDetailContainer = () => {
  const [ productos, setProductos ] = useState({});
  const [loading, setLoading] = useState(true);

  const { idProducto } = useParams()

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const productosCollection = collection(db, "productos");
    const productoDoc = doc(productosCollection, idProducto);

    getDoc(productoDoc)
      .then((doc) => {
        if (doc.exists()) {
          setProductos({ id: doc.id, ...doc.data() });
        } else {
          console.log("El documento no existe");
        }
      })
      .catch((error) => {
        console.log("Error obteniendo el documento: ", error);
      })
      .finally(() => setLoading(false));
  }, [idProducto]);


  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Loader />
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ItemDetail productos={productos} />
    </div>
  );
}

export default ItemDetailContainer;