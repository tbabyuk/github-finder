// import styles
import "./Navbar.css"

import { Link } from "react-router-dom";

import { BsGithub } from "react-icons/bs";

function Navbar() {
  return (
      <nav className="navigation">
          <div className="nav-content-container">
              <Link to="/"><BsGithub />&nbsp;&nbsp;&nbsp;Github Finder</Link>
              <Link to="/">Home</Link>
          </div>
      </nav>
)
}

export default Navbar