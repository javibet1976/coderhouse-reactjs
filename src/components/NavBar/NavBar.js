import { Link } from "react-router-dom";
import "./NavBar.css";
import CardWidget from "../CardWidget/CardWidget";

function navBar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <ul className="navbar-nav">
          <Link to="/">
            <li className="nav-item active">Home</li>
          </Link>
          <Link to="/Promos">
            <li className="nav-item active">Promos</li>
          </Link>
          <Link to="/Contacto">
            <li className="nav-item active">Contacto</li>
          </Link>
          <Link to="/Conferencias">
            <li className="nav-item active">Conferencias</li>
          </Link>
          <Link>
            <li className="nav-item active">
              <CardWidget />
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default navBar;

// <nav className="navbar navbar-expand-sm bg-light navbar-light">
//         <ul className="navbar-nav">
//           <li className="nav-item active">
//             <a className="nav-Link" href="#">
//               Promos
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-Link" href="#">
//               Contacto
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-Link" href="#">
//               Conferencias
//             </a>
//           </li>
//           <li>
//             <a className="nav-Link" href="#">
//               <CardWidget />
//             </a>
//           </li>
//         </ul>
//       </nav>
