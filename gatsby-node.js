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
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  // Get all the posts in an array
  const webProjects = result.data.webProjects.edges || []
  const photoProjects = result.data.photoProjects.edges || []
  const blogPosts = result.data.blogPosts.edges || []

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
}
