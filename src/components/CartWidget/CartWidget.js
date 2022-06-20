import "../../App.css";
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
        <div className="container">
          <div className="row">
            <div className="col sm navbar-brand">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <div className="col sm">
              <div className="badge rounded-pill bg-danger counter">{quantity}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CartWidget;
