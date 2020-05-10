import React from "react"
import "./components.scss"

const LatestImage = ({ image }) => {
  return (
    <div className="latestImage__main">
      <img
        src={image.node.childMarkdownRemark.frontmatter.image}
        alt={`${image.node.childMarkdownRemark.frontmatter.caption} - ${image.node.childMarkdownRemark.frontmatter.date} `}
        key={image.node.id}
      />
    </div>
  )
}

export default LatestImage
