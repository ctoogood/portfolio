import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Footer from "./footer"
import "./components.scss"

const Header = props => {
  const [menu, setMenu] = useState(false)

  const menuActive = menu ? "is-active" : ""
  const menuClicked = menu ? "clicked-menu" : ""

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <>
      <section className={`menu__main ${menuActive}`}>
        {console.log(menu)}
        <ul className="menu__list">
          <Link to="/" className="menu__listItem">
            Home
          </Link>
          <Link to="/webdevelopment" className="menu__listItem">
            Web Development
          </Link>
          <Link to="/photography" className="menu__listItem">
            Photography
          </Link>
          <Link to="/latest-images" className="menu__listItem">
            Latest Images
          </Link>
          <Link to="/blog" className="menu__listItem">
            Blog
          </Link>
        </ul>
        <Footer />
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
