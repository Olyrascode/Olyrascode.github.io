import { Link, useLocation } from "react-router-dom";
import DarkMode from "./DarkMode";
function NavBar() {
    const location = useLocation();
  return (
    <div>
      <nav>
        <ul>
          <li>Présentation</li>
          <li className="navItem">
            <Link
              to="/Cv"
              className={`nav-link ${
                location.pathname === "/Cv" ? "active" : ""
              }`}
            >
              CV
            </Link>
          </li>  
            <li className="homeLogo navItem " >    
      <Link to='/'>
              <img src=".\src\assets\Img\home.svg" alt="" />
      </Link>
            </li>
          <li className="navItem">
            <Link
              to="/Projets"
              className={`nav-link ${
                location.pathname === "/Projets" ? "active" : ""
              }`}
            >
              Projets
            </Link>
          </li>
          <li className="navItem">
            <Link
              to="/Contact"
              className={`nav-link ${
                location.pathname === "/Contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
        <DarkMode />
      </nav>
    </div>
  );
}
export default NavBar;
