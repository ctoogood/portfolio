import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./components.scss"

const LatestImages = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        limit: 5
        filter: {
          sourceInstanceName: { eq: "latestimages" }
          extension: { eq: "md" }
        }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                caption
                image
              }
            }
          }
        }
      }
    }
  `)
  return (
    <section className="latestImages__main">
      <h1>LATEST IMAGES</h1>
      <section className="latestImages__grid">
        {data.allFile.edges.map(project => (
          <img
            src={project.node.childMarkdownRemark.frontmatter.image}
            alt={project.node.childMarkdownRemark.frontmatter.caption}
            key={project.node.id}
          />
        ))}
      </section>
    </section>
  )
}

export default LatestImages
