import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = props => {
  return (
    <>
      <main style={{ maxWidth: "1400px", margin: "auto" }}>
        <Header path={props.path} />
        {props.children}
      </main>
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
