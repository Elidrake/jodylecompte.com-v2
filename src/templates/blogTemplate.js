import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents } = markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <div className="blog-posted-date">Posted on {frontmatter.date}</div>
          <div className="blog-toc">
            <h2>Table of Contents</h2>
            <div dangerouslySetInnerHTML={{ __html: tableOfContents }}></div>
          </div>

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
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
        title
      }
    }
  }
`
