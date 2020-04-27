import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const WebDevelopment = () => {
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
    <Layout>
      <SEO title="Web Development" />
      <section className="page__main">
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
                I'm a keen beginner JavaScript developer with experience in
                frontend technologies, such as React, and some familiarity using
                Node JS & MongoDb on the backend.
              </p>
              <p>
                All of my web development skills have been self-taught using
                online-based resources. I very much enjoy learning new skills
                and challenging myself to solve problems through the available
                technologies.
              </p>
              <p>
                I began learning web development a couple of years ago to create
                websites for myself and soon realised I enjoyed the process of
                creating a design and then trying to implement it as a
                functional website.
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
