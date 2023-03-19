// import styles
import styles from "./Navbar.module.css"

import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

function Navbar() {
  return (
      <nav className={styles.navbar}>
          <div className={styles["navbar-inner"]}>
              <Link to="/"><BsGithub />&nbsp;&nbsp;&nbsp;Github Finder</Link>
              <Link to="/">Home</Link>
          </div>
      </nav>
)
}

export default Navbar