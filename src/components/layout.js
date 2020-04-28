import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = props => {
  return (
    <>
      <Header path={props.path} />
      <main>{props.children}</main>
      <footer
        style={{
          fontFamily: "Roboto",
          color: "#707070",
          marginLeft: "0.5rem",
        }}
      >
        © {new Date().getFullYear()}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
