import logo from "../assets/cart.png";
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className="cartDiv">
<img src={logo}  alt="" srcset="" />
<p>0</p>
    </div>
  )
}

export default CartWidget