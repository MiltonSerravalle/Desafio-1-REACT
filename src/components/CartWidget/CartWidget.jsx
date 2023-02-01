import cartLogo from "../../assets/cart.png";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div>
      <a className="cartDiv" href="#">
        <img src={cartLogo} />
        <p>0</p>
      </a>
    </div>
  );
};

export default CartWidget;
