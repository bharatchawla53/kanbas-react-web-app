import { Link, useLocation } from "react-router-dom";

function Nav() {
    const { pathname } = useLocation();
    return (
        <nav className="nav nav-tabs mt-2">
            <Link className={`nav-link ${pathname.includes("a3") ? "active" : ""}`} to="/Labs/a3">A3</Link>
            <Link className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`} to="/Kanbas">Kanbas</Link>
            <Link className={`nav-link ${pathname.includes("hello") ? "active" : ""}`} to="/hello">Hello</Link>
        </nav>
    );
}

export default Nav;