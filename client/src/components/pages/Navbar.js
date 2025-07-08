import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link class="navbar-brand" to="/">Navbar</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">About Us</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/login">Login</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/register">Register</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/profile">Profile</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>

        <Outlet />
        </div>
    )
}

export default Navbar;