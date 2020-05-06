import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./projectDetail.scss"

const BlogPostDetail = ({ data: { post }, errors }) => {
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
        keywords={post.frontmatter.keywords}
        image={post.frontmatter.featured_image}
      />
      <div className="projectDetail__main">
        <nav className="page__section">
          <Link to="/blog">BLOG</Link>
        </nav>
        <section className="projectDetail__header">
          <section className="blogPostDetail__fixed">
            <img
              src={post.frontmatter.featured_image}
              alt=""
              className="projectDetail__image"
            />
            <h2 className="projectDetail__metadata">{post.frontmatter.date}</h2>
            <hr />
            <h1>{post.frontmatter.title}</h1>
            <h3 className="projectDetail__metadata">
              {post.frontmatter.description}
            </h3>
          </section>
        </section>
        <section
          className="blogPostDetail__content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export default BlogPostDetail

export const query = graphql`
  query postQuery($slug: String!) {
    post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        category
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        excerpt
        keywords
        featured_image
      }
    }
  }
`
