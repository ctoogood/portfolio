import React from "react"
import Twitter from "../images/twitter.svg"
import Github from "../images/github.svg"
import "./components.scss"

const Footer = () => {
  return (
    <div className="footer__main">
      <p>calumtoogood@protonmail.com</p>
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
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.twitter.com/calumtoogood"
      >
        <img style={{ width: "20px" }} src={Twitter} alt="twitter" />
      </a>
      <p>© {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
