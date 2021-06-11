//import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
// import "../css/navbar.css";
import searchIcon from "../assets/icons/search.svg";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-end">
        <div className="d-flex container-fluid justify-content-between">
          <a className="navbar-brand mx-3" href="#">
            Idiom Club
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse w-25 flex-grow-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  <img src={searchIcon} alt="magnidier icon" /> Search
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link " href="#">
                  Join
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="#">
                  Follow
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
