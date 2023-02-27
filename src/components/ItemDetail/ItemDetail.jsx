import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ productos }) => {

  const { agregarCarrito } = useCartContext()

  const onAdd = (cant) => {
    agregarCarrito({ ...productos, cantidad: cant });
  };

  const { cartList } = useCartContext()
    console.log(cartList)

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="card mx-2 mb-4" style={{width: "300px"}}>
            <div className='card-header text-center'>
              {productos.name}
            </div>
            <div className='card-body text-center'>
              <img src={productos.foto} alt='imagen' className='product-image w-100'/>
            </div>
            
            <div className='card-body text-center'>
              <strong>ARS ${productos.precio}</strong>
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