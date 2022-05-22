import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <>
      <a href="-" className="navbar-brand">
        <FontAwesomeIcon icon={faCircleUser} />
      </a>
      <a href="-" className="navbar-brand">
        <FontAwesomeIcon icon={faShoppingCart} />
      </a>
    </>
  );
};

export default CartWidget;
