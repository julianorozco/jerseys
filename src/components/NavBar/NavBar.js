import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a href="index.html">
            <img src="/images/logo.PNG" alt=""></img>
          </a>
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
              <li className="nav-item active">
                <a className="nav-link" href="link">
                  Fútbol
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="link">
                  Basketball
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="link">
                  Hockey
                </a>
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
