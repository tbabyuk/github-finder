// import styles
import "./Navbar.css"

import { Link } from "react-router-dom";

import { BsGithub } from "react-icons/bs";

function Navbar() {
  return (
      <nav class="navigation">
          <div className="nav-content-container">
              <div><BsGithub />&nbsp;&nbsp;&nbsp;Github Finder</div>
              <Link to="/">Home</Link>
          </div>
      </nav>
)
}

export default Navbar