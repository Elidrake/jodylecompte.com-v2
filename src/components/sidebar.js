import React from "react"
import { Link } from "gatsby"

const SidebarContent = () => {
  return (
    <>
      <header>
        <div className="brand">
          <Link to="/">
            <span className="logo-box">J</span>
            <span className="brand-accent">Jody </span>
            LeCompte
          </Link>
        </div>
      </header>
      <div className="sidebar-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog#blog-posts">Blog</Link>
          </li>
          <li>
            <Link to="/tags">Tags</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </div>
      <div class="sidebar-social">
        <a
          href="https://www.linkedin.com/in/jody-lecompte-7b562812b/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/jodylecompte"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://twitter.com/jody_lecompte"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-twitter"></i>
        </a>
      </div>
    </>
  )
}

export default SidebarContent
