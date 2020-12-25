import React from "react"
import { Link } from "gatsby"
const _ = require("lodash")

const PostLink = ({ post }) => {
  console.log(post)
  return (
    <div className="home-blog-link">
      <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
      <div className="posted-date">Posted on {post.frontmatter.date}</div>
      <div className="tags-link-list">
        {post.frontmatter.tags.map(tag => {
          return (
            <Link to={"/tags/" + _.kebabCase(tag)}>
              <span>{tag}</span>
            </Link>
          )
        })}
      </div>
      <div className="desc">{post.frontmatter.description}</div>
    </div>
  )
}
export default PostLink
