import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const WebDevelopment = props => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
        filter: {
          sourceInstanceName: { eq: "webdev" }
          extension: { eq: "md" }
        }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                title
                description
                slug
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout path={props.location}>
      <SEO title="Web Development" />
      <section className="page__main">
        <nav className="page__section">
          <Link to="/webdevelopment">WEB DEVELOPMENT</Link>
        </nav>
        <section className="page__info">
          <section className="page__fixed">
            <section className="page__title">
              <h1>CALUM TOOGOOD</h1>
              <hr />
              <h2>
                <span>JAVASCRIPT WEB DEVELOPER</span>
              </h2>
              <h3>BASED IN SHETLAND</h3>
            </section>
            <section className="page__description">
              <p>
                I'm a self taught JavaScript developer with experience in
                frontend technologies, such as ReactJS, and some familiarity
                using NodeJS & MongoDB on the Backend.
              </p>
              <p>
                Most of my projects I create using the Jamstack - I enjoy using
                static site generators(GatsbyJS) along with any tools necessary
                for the project. I've also created sites based on AWS, using a
                variety of their services to create tailored serverless apps.
              </p>
              <p>
                All of my web development skills have been self-taught using
                online-based resources. I very much enjoy learning new skills
                and challenging myself to solve problems through the available
                technologies.
              </p>
              <p>
                Please check out this selection of projects I've designed and
                developed. There are links to visit the sites and most of the
                source code is available on GitHub.
              </p>
            </section>
          </section>
        </section>
        <section className="page__projects">
          {data.allFile.edges.map(project => (
            <Project project={project} key={project.node.id} />
          ))}
        </section>
      </section>
    </Layout>
  )
}

export default WebDevelopment
