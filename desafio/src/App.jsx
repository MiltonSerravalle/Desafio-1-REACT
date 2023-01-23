import { useState } from 'react'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import NavBar from './NavBar/NavBar'
import "./App.css"

function App(props) {
 
  return (
    <div className='appBody'>
    <NavBar />
    <ItemListContainer greeting='Bienvenidos'  />
    </div>
  )
}

export default App
