import React from "react"

import Selfie from "../images/selfie.png"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/postLink.js"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="home-header">
        <div className="photo">
          <img src={Selfie} alt="Photo of Jody LeCompte" />
        </div>
        <div className="about-me">
          <div className="title">Full-Stack Developer, Writer, Marketer</div>
          <div className="name">Jody LeCompte</div>
          <div className="desc">
            I am a father, fisherman, and full stack developer dedicated to
            helping others to learn and reach their maximum potential while I
            work to reach my own.
          </div>
        </div>
      </div>
      <div class="blog-latest-posts">
        <h2>Latest Posts</h2>
        <div>{Posts}</div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            description
          }
        }
      }
    }
  }
`
