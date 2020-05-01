import React from "react"
import { Link } from "gatsby"
import "./components.scss"

const BlogPost = ({ post }) => {
  return (
    <section className="blogPost__main">
      <Link to={`/blog/${post.node.childMarkdownRemark.frontmatter.slug}`}>
        <h4>{post.node.childMarkdownRemark.frontmatter.date}</h4>
        <hr />
        <h2>{post.node.childMarkdownRemark.frontmatter.title}</h2>
      </Link>
    </section>
  )
}

export default BlogPost
