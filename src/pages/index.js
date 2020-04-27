import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./pages.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "dore-holm-large-waves.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <main>
        <section className="home__title">
          <h1>CALUM TOOGOOD</h1>
          <hr />
          <h2>
            <span>WEB DEVELOPER</span> & <span>PHOTOGRAPHER</span>
          </h2>
          <h3>BASED IN SHETLAND</h3>
        </section>
        <section className="home__imagecontainer">
          <Img
            className="home__hero__image"
            fluid={data.placeholderImage.childImageSharp.fluid}
          />
        </section>
        <div className="home__spacer">&nbsp;</div>
      </main>
    </Layout>
  )
}

export default IndexPage
