import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const NavBar = () => {
  const { getQuantity } = useContext(CartContext);

if (getQuantity() === 0) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="/images/logo.PNG" alt=""></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/category/futbol" className="nav-link">
                  Fútbol
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category/basketball" className="nav-link">
                  Basketball
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category/hockey" className="nav-link">
                  Hockey
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="/images/logo.PNG" alt=""></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/category/futbol" className="nav-link">
                  Fútbol
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category/basketball" className="nav-link">
                  Basketball
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category/hockey" className="nav-link">
                  Hockey
                </NavLink>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </>
  );
};
export default NavBar;
