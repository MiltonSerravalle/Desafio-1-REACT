import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import Swal from "sweetalert2";

const ItemDetail = ({ productos }) => {

  const { agregarCarrito } = useCartContext()

  const onAdd = (cant) => {
    agregarCarrito({ ...productos, cantidad: cant });
    Swal.fire({
      title: "Agregado exitosamente!",
      text: `El producto ha sido agregado al carrito.`,
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };


    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="card mx-2 mt-5 mb-3 text-bg-secondary border-secondary" style={{width: "300px"}}>
            <div className='card-header text-center'>
              <h3>{productos.name}</h3>
            </div>
            <div className='card-body text-center'>
              <img src={productos.foto} alt='imagen' className='product-image w-100'/>
            </div>
            
            <div className='card-body text-center'>
              <h5><strong>ARS ${productos.precio}</strong></h5>
            </div>
            <div className='mx-auto m-3'>
            <ItemCount onAdd={onAdd} />
            </div>
            <div className='card-body text-center'>
              <NavLink to={'/'} className="btn btn-dark btn-large "> Atras </NavLink>
            </div>
            
          </div>
          
        </div>
      </div>
    );
  };
  
  export default ItemDetail;