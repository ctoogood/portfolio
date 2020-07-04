import React from "react"
import { Link } from "gatsby"
import Overdrive from "react-overdrive"

const Project = ({ project }) => {
  return (
    <Link to={`/webdevelopment/${project.node.frontmatter.slug}`}>
      <Overdrive id="featured-image">
        <img src={project.node.frontmatter.featured_image} alt="Home Page" />
      </Overdrive>

      <h2>{project.node.frontmatter.title}</h2>
      <p>{project.node.frontmatter.description}</p>
    </Link>
  )
}

export default Project
