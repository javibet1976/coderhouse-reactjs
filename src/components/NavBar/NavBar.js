import "./NavBar.css";
import CardWidget from "../CardWidget/CardWidget";

function navBar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Promos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contacto
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Conferencias
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              <CardWidget />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default navBar;
