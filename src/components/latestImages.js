import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import "../components/components.scss"
import LatestImage from "../components/latestImage"

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
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    }
  `)

  const options = {
    showThumbnails: false,
    captionFontWeight: "300",
    autoplaySpeed: 0,
    showDownloadButton: false,
    enablePanzoom: false,
  }

  return (
    <section className="latestImages__main">
      <h1>LATEST IMAGES</h1>
      <SimpleReactLightbox>
        <SRLWrapper options={options}>
          <section className="latestImages__grid">
            {data.allFile.edges.map(image => (
              <LatestImage image={image} key={image.node.id} />
            ))}
          </section>
        </SRLWrapper>
      </SimpleReactLightbox>
    </section>
  )
}

export default LatestImages
