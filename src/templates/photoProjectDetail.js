import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./projectDetail.scss"

const Post = ({ data: { project }, errors }) => {
  return (
    <Layout>
      <SEO
        title={project.frontmatter.title}
        description={project.frontmatter.description}
        keywords={project.frontmatter.keywords}
        image={project.frontmatter.featuredImage.publicURL}
      />
      <div className="photoProjectDetail__main">
        <nav className="page__section">
          <Link to="/photography">PHOTOGRAPHY</Link>
        </nav>
        <section className="projectDetail__header">
          <h1>{project.frontmatter.title}</h1>
          <h3 className="projectDetail__metadata">
            {project.frontmatter.description}
          </h3>
          <hr />
        </section>
        <section
          className="photoProjectDetail__content"
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
        keywords
        featuredImage {
          publicURL
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
