import React from "react"
import styles from "../styles/navbar.module.css"
import { Link } from "gatsby"

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const onToggle = val => {
    setIsOpen(!val)
  }
  return (
    <header
      className={isOpen ? `${styles.active} ${styles.header}` : styles.header}
    >
      <div className={styles.hamburger} onClick={() => onToggle(isOpen)}>
        <div className={styles.hamburgerBox}>
          <div className={styles.hamburgerInner}></div>
        </div>
      </div>
      <div className={styles.container}>
        <ul className={styles.navContainer}>
          <li className={styles.navItem}>
            <Link
              className={styles.link}
              activeStyle={{ color: "#4990E2" }}
              to="/"
            >
              HOME
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              className={styles.link}
              activeStyle={{ color: "#4990E2" }}
              to="/experiences"
            >
              EXPERIENCES
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              className={styles.link}
              activeStyle={{ color: "#4990E2" }}
              to="/projects"
            >
              PROJECTS
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              className={styles.link}
              activeStyle={{ color: "#4990E2" }}
              to="/blog"
            >
              BLOG
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              className={styles.link}
              activeStyle={{ color: "#4990E2" }}
              to="/contact"
            >
              GET IN TOUCH
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
