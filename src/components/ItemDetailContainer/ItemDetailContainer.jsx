import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
 const {idProducto} = useParams()
console.log(idProducto)
  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer