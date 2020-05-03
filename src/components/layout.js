import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = props => {
  return (
    <>
      <main style={{ maxWidth: "1400px", margin: "auto", minHeight: "100vh" }}>
        <Header path={props.path} />
        {props.children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
