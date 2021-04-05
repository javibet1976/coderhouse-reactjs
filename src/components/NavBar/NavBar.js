import "./NavBar.css";
import CardWidget from "../CardWidget/CardWidget";

function navBar(props) {
    return <>    
            <nav class="navbar navbar-expand-sm bg-light navbar-light">
                <ul class="navbar-nav">
                    <li>
                        <a class="nav-link" href="#"><CardWidget /></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Promos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Conferencias</a>
                    </li>
                </ul>
            </nav>
           
    </>;
}

export default navBar;