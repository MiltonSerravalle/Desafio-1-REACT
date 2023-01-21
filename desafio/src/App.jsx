import { useState } from 'react'
import "./App.css"
import ItemListContainer from './ItemListContainer/ItemListContainer'
import NavBar from './NavBar/NavBar'

function App(props) {
 
  return (
    <div className='appBody'>
    <NavBar />
    <ItemListContainer greeting='Bienvenidos'  />
    </div>
  )
}

export default App
