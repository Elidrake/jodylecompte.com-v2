import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div className="home-blog-link">
    <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
    <div className="posted-date">Posted on {post.frontmatter.date}</div>
    <div className="desc">{post.frontmatter.description}</div>
  </div>
)
export default PostLink
