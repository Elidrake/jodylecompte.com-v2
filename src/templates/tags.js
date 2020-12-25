import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PostLink from "../components/postLink"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <div className="tagged-posts-list">
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            return <PostLink post={node} />
          })}
        </ul>
        <div className="all-tags-link">
          <Link className="btn" to="/tags">
            All tags
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            description
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`
