import React from "react"
import { graphql, Link } from "gatsby"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import "../components/components.scss"
import SEO from "../components/seo"
import LatestImage from "../components/latestImage"
import Layout from "../components/layout"

const LatestImages = props => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1
      ? "/latest-images/"
      : "/latest-images/" + (currentPage - 1).toString()
  const nextPage = "/latest-images/" + (currentPage + 1).toString()

  const options = {
    settings: {
      autoplaySpeed: 0,
      enablePanzoom: false,
    },
    buttons: {
      showDownloadButton: false,
    },
    thumbnails: {
      showThumbnails: false,
    },
    captions: {
      captionFontWeight: "300",
    },
  }

  return (
    <Layout>
      <SEO title="Latest Images" />
      <section className="latestImages__main">
        <h1>LATEST IMAGES</h1>
        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            <section className="latestImages__grid">
              {props.data.images.edges.map(image => (
                <LatestImage image={image} key={image.node.id} />
              ))}
            </section>
          </SRLWrapper>
        </SimpleReactLightbox>
        <section className="latestImages__nav">
          {!isFirst && (
            <Link className="latestImages__prev" to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {!isLast && (
            <Link className="latestImages__next" to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </section>
      </section>
    </Layout>
  )
}

export default LatestImages

export const query = graphql`
  query ImagesQuery($limit: Int!, $skip: Int!) {
    images: allFile(
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
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
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  }
`
