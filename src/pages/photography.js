import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PhotoProject from "../components/photoProject"
import "./pages.scss"

const Photography = props => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
        filter: {
          sourceInstanceName: { eq: "photography" }
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
      <SEO title="Photography" />
      <section className="page__main">
        <nav className="page__section">
          <Link to="/photography">PHOTOGRAPHY</Link>
        </nav>
        <section className="page__info">
          <section className="page__fixed">
            <section className="page__title">
              <h1>CALUM TOOGOOD</h1>
              <hr />
              <h2>
                <span style={{ color: "#8C6C6C" }}>PHOTOGRAPHER</span>
              </h2>
              <h3>BASED IN SHETLAND</h3>
            </section>
            <section className="page__description">
              <p>
                One of my main passions is photography - I love photographing
                travel, the outdoors & people.
              </p>
              <p>
                I've been a keen photographer since childhood and completed a
                BA(hons) Photojournalism in 2012 from Swansea Met University. I
                was a keen traveller whilst at university, spending a lot of
                time in Eastern Europe creating photography projects for my
                studies.
              </p>
              <p>
                After completing my degree I spent some time working as a
                photojournalist in the Middle East and doing further travelling.
                Since then I've spent time working commercially as a
                photographer in the Shetland Islands, but I now just enjoy
                photographing landscapes in Shetland and occasional travel.
              </p>
            </section>
          </section>
        </section>
        <section className="page__projects">
          {data.allFile.edges.map(project => (
            <PhotoProject project={project} key={project.node.id} />
          ))}
        </section>
      </section>
    </Layout>
  )
}

export default Photography
