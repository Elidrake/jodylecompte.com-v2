import React from "react"
import { graphql, Link } from "gatsby"
import _ from "lodash"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <div className="blog-posted-date">Posted on {frontmatter.date}</div>
          <div style={{ textAlign: "center" }} className="tags-link-list">
            {frontmatter.tags.map(tag => {
              return (
                <Link to={"/tags/" + _.kebabCase(tag)}>
                  <span>{tag}</span>
                </Link>
              )
            })}
          </div>
          <div className="blog-social-image">
            <img src={frontmatter.socialImage} />
          </div>
          <div className="blog-toc">
            <h2>Table of Contents</h2>
            <div dangerouslySetInnerHTML={{ __html: tableOfContents }}></div>
          </div>

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div class="more-posts-button">
            <Link to="/" className="btn">
              More Posts
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      tableOfContents(
        absolute: false
        pathToSlugField: "frontmatter.slug"
        maxDepth: 3
      )
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        socialImage
        title
        tags
      }
    }
  }
`
