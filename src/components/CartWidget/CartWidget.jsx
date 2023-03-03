import { BiCart} from "react-icons/bi";
import { useCartContext } from "../../Context/CartContext";
import "./CartWidget.css";


const Cartwidget = ({ cartCounter }) => {
  const {cartTotal} = useCartContext();
  return (
    <>
      <button className="p-2 border-solid border rounded-md shadow-md hover:shadow-lg text-sm hover:border-black rounded flex justify-center items-center gap-1 ">
      {cartTotal() !== 0 && cartTotal()} <BiCart/>
      </button>
    </>
  );
};
export default Cartwidget;
