import React from "react"
import Github from "../images/github.svg"
import "./components.scss"

const Footer = () => {
  return (
    <div className="footer__main">
      <a href="mailto:calumtoogood@protonmail.com">
        <p>calumtoogood@protonmail.com</p>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.github.com/ctoogood"
      >
        <img
          style={{ width: "20px", marginRight: "1rem" }}
          src={Github}
          alt="github"
        />
      </a>
      <p>© {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
