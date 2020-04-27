exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allFile(
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
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  // Get all the posts in an array
  const projects = result.data.allFile.edges || []

  projects.forEach((edge, index) => {
    const path = `/webdevelopment/${edge.node.childMarkdownRemark.frontmatter.slug}`
    createPage({
      path,
      component: require.resolve("./src/templates/projectDetail.js"),
      context: { slug: edge.node.childMarkdownRemark.frontmatter.slug },
    })
  })
}
