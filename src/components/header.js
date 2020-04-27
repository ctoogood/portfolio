import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./components.scss"

const Header = () => {
  const [menu, setMenu] = React.useState(false)

  const menuActive = menu ? "is-active" : ""
  const menuClicked = menu ? "clicked-menu" : ""

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <>
      <section className={`menu__main ${menuActive}`}>
        <ul className="menu__list">
          <Link onClick={toggleMenu} to="/" className="menu__listItem">
            Home
          </Link>
          <Link
            onClick={toggleMenu}
            to="/web-development"
            className="menu__listItem"
          >
            Web Development
          </Link>
          <Link
            onClick={toggleMenu}
            to="/photography"
            className="menu__listItem"
          >
            Photography
          </Link>
          <Link
            onClick={toggleMenu}
            to="/latest-images"
            className="menu__listItem"
          >
            Latest Images
          </Link>
          <Link onClick={toggleMenu} to="/blog" className="menu__listItem">
            Blog
          </Link>
          <Link onClick={toggleMenu} to="/about" className="menu__listItem">
            About
          </Link>
          <Link onClick={toggleMenu} to="/contact" className="menu__listItem">
            Contact
          </Link>
        </ul>
      </section>
      <header className="header__main">
        <button
          className={`header__menuIcon ${menuClicked}`}
          onClick={toggleMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
