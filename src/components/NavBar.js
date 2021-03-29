function App() {
    return <>
             <NavBar />
             <h1>Libreria Betancourt</h1>
             <h2>Los mejores libros para su biblioteca</h2>
            
            <nav class="navbar navbar-expand-sm bg-light navbar-light">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Economía</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Historia</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Religión</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Filosofía</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Sociología</a>
                    </li>
                </ul>
            </nav>
    </>;
}
