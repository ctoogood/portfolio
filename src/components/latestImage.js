import React from "react"
import "./components.scss"

const LatestImage = ({ project }) => {
  return (
    <div className="latestImage__main">
      <img
        src={project.node.childMarkdownRemark.frontmatter.image}
        alt={`${project.node.childMarkdownRemark.frontmatter.caption} - ${project.node.childMarkdownRemark.frontmatter.date} `}
        key={project.node.id}
      />
    </div>
  )
}

export default LatestImage
