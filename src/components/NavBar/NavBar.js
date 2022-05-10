const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="link">
            JERSEYS
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
        </div>
      </nav>
    </>
  );
};
export default NavBar;
