import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/postLink"

export default class BlogList extends React.Component {
  render() {
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    let prevPage =
      currentPage - 1 === 1 ? "/blog" : "/blog/" + (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <SEO title="Blog Posts" />
        <div className="blog-latest-posts" id="blog-posts">
          <h2>All Posts</h2>
          {posts.map(({ node }) => {
            return <PostLink post={node} />
          })}
        </div>
        <div class="blog-pagination">
          {!isFirst && (
            <Link className="btn" to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {!isLast && (
            <Link className="btn" to={"/blog/" + nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </div>
      </Layout>
    )
  }
}
export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
