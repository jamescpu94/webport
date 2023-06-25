import { NavLink, Link } from "react-router-dom";

export default function NavBarTop() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <Link className="navbar-brand" to="/">
          Jamescpu
        </Link>
        <button
          id="navBar"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/contact-me" className="nav-link">
                Contact me
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/about-me" className="nav-link">
                About me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
