import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import BlogPost from "../components/blog"
import SEO from "../components/seo"
import "./pages.scss"

const Blog = props => {
  const data = useStaticQuery(graphql`
    query {
      blogImage: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "waves-crashing-burra.jpg" }
      ) {
        id
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allFile(
        filter: { sourceInstanceName: { eq: "blog" }, extension: { eq: "md" } }
        sort: { order: DESC, fields: childMarkdownRemark___frontmatter___date }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                slug
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout path={props.location}>
      <SEO title="Blog" />
      <section className="page__main">
        <nav className="page__section">
          <Link to="/BLOG">BLOG</Link>
        </nav>
        <section className="page__info">
          <section className="page__fixed">
            <Img
              className="page__image"
              fluid={data.blogImage.childImageSharp.fluid}
            />
            <section className="page__title">
              <h1>CALUM TOOGOOD</h1>
              <hr />
              <h2>
                <span>BLOG</span>
              </h2>
              <h3>Writings about web development & photography</h3>
            </section>
          </section>
        </section>
        <section className="page__blogPosts">
          {data.allFile.edges.map(project => (
            <BlogPost post={project} key={project.node.id} />
          ))}
        </section>
      </section>
    </Layout>
  )
}

export default Blog
