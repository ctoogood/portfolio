exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      webProjects: allFile(
        filter: {
          sourceInstanceName: { eq: "webdev" }
          extension: { eq: "md" }
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
                description
                slug
              }
            }
          }
        }
      }
      photoProjects: allFile(
        filter: {
          sourceInstanceName: { eq: "photography" }
          extension: { eq: "md" }
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
                description
                slug
              }
            }
          }
        }
      }
      blogPosts: allFile(
        filter: { sourceInstanceName: { eq: "blog" }, extension: { eq: "md" } }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
      images: allFile(
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
  if (result.errors) {
    throw result.errors
  }
  // Get all the posts in an array
  const webProjects = result.data.webProjects.edges || []
  const photoProjects = result.data.photoProjects.edges || []
  const blogPosts = result.data.blogPosts.edges || []
  const latestImages = result.data.images.edges || []

  const postsPerPage = 5
  const numPages = Math.ceil(latestImages.length / postsPerPage)

  webProjects.forEach((edge, index) => {
    const path = `/webdevelopment/${edge.node.childMarkdownRemark.frontmatter.slug}`
    createPage({
      path,
      component: require.resolve("./src/templates/projectDetail.js"),
      context: { slug: edge.node.childMarkdownRemark.frontmatter.slug },
    })
  })

  photoProjects.forEach((edge, index) => {
    const path = `/photography/${edge.node.childMarkdownRemark.frontmatter.slug}`
    createPage({
      path,
      component: require.resolve("./src/templates/photoProjectDetail.js"),
      context: { slug: edge.node.childMarkdownRemark.frontmatter.slug },
    })
  })

  blogPosts.forEach((edge, index) => {
    const path = `/blog/${edge.node.childMarkdownRemark.frontmatter.slug}`
    createPage({
      path,
      component: require.resolve("./src/templates/blogPostDetail.js"),
      context: { slug: edge.node.childMarkdownRemark.frontmatter.slug },
    })
  })

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/latest-images` : `/latest-images/${i + 1}`,
      component: require.resolve("./src/templates/latestImages.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
