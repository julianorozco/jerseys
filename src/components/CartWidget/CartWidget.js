import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);
  const quantity = getQuantity();
  return (
    <>
      <Link to="/cart" className="text-decoration-none">
        <a href="-" className="navbar-brand">
          <FontAwesomeIcon icon={faShoppingCart} />
        </a>
        <span className="badge rounded-pill bg-danger">{quantity}</span>
      </Link>
    </>
  );
};

export default CartWidget;
