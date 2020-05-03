import React from "react"
import "./components.scss"

const Footer = () => {
  return (
    <div className="footer__main">
      <p>calumtoogood@protonmail.com</p>
      <p>© {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
