import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./pages.scss"
import LatestImages from "../components/latestImages"

const LatestImagesPage = props => {
  return (
    <Layout path={props.location}>
      <SEO title="Latest Images" />
      <LatestImages />
    </Layout>
  )
}

export default LatestImagesPage
