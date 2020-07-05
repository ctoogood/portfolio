import React from "react"
import { graphql, Link } from "gatsby"
import Overdrive from "react-overdrive"
import Github from "../images/githubgrey.svg"
import LinkIcon from "../images/link.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./projectDetail.scss"

const ProjectDetail = ({ data: { project }, errors }) => {
  const image = project.frontmatter.featured_image

  return (
    <Layout>
      <SEO
        title={project.frontmatter.title}
        description={project.frontmatter.description}
        keywords={project.frontmatter.keywords}
        image={project.frontmatter.featured_image}
      />
      <div className="projectDetail__main">
        <nav className="page__section">
          <Link to="/webdevelopment">WEB DEVELOPMENT</Link>
        </nav>
        <section className="projectDetail__header">
          <section className="projectDetail__fixed">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.frontmatter.url}
            >
              <Overdrive id="featured-image">
                <img
                  src={image}
                  alt="Home Page"
                  className="projectDetail__image"
                />
              </Overdrive>
            </a>
            <h2 className="projectDetail__metadata">
              {project.frontmatter.category}
            </h2>
            <hr />
            <h1>{project.frontmatter.title}</h1>
            <h3 className="projectDetail__metadata">
              {project.frontmatter.description}
            </h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.frontmatter.github}
            >
              <img
                style={{ width: "20px", marginRight: "1rem" }}
                src={Github}
                alt="github"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.frontmatter.url}
            >
              <img style={{ width: "20px" }} src={LinkIcon} alt="url" />
            </a>
          </section>
        </section>
        <section
          className="projectDetail__content"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
      </div>
    </Layout>
  )
}

export default ProjectDetail

export const query = graphql`
  query ProjectQuery($slug: String!) {
    project: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        category
        slug
        title
        description
        keywords
        url
        github
        featured_image
      }
    }
  }
`
