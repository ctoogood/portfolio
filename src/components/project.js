import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Overdrive from "react-overdrive"

const Project = ({ project }) => {
  return (
    <Link
      to={`/webdevelopment/${project.node.childMarkdownRemark.frontmatter.slug}`}
    >
      <Overdrive id="featured-image">
        <Img
          fluid={
            project.node.childMarkdownRemark.frontmatter.featuredImage
              .childImageSharp.fluid
          }
        />
      </Overdrive>

      <h2>{project.node.childMarkdownRemark.frontmatter.title}</h2>
      <p>{project.node.childMarkdownRemark.frontmatter.description}</p>
    </Link>
  )
}

export default Project
