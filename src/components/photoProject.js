import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "./components.scss"

const PhotoProject = ({ project }) => {
  return (
    <section className="photoProject__main">
      <Link
        to={`/photography/${project.node.childMarkdownRemark.frontmatter.slug}`}
      >
        <Img
          className="photoProject__image"
          fluid={
            project.node.childMarkdownRemark.frontmatter.featuredImage
              .childImageSharp.fluid
          }
        />
        <h2 className="photoProject__title">
          {project.node.childMarkdownRemark.frontmatter.title}
        </h2>
        <p>{project.node.childMarkdownRemark.frontmatter.description}</p>
      </Link>
    </section>
  )
}

export default PhotoProject
