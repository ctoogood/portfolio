import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./projectDetail.scss"

const Post = ({ data: { project }, errors }) => {
  const image = project.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <SEO title={project.frontmatter.title} />
      <div className="projectDetail__main">
        <nav className="page__section">
          <Link to="/webdevelopment">PHOTOGRAPHY</Link>
        </nav>
        <section className="projectDetail__header">
          <section className="projectDetail__fixed">
            <Img fluid={image} className="projectDetail__image" />
            <hr />
            <h1>{project.frontmatter.title}</h1>
            <h3 className="projectDetail__metadata">
              {project.frontmatter.description}
            </h3>
          </section>
        </section>
        <section
          className="projectDetail__content"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
      </div>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query PhotoProjectQuery($slug: String!) {
    project: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        category
        slug
        title
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
