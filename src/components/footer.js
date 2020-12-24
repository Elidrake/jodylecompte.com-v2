import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <div className="social">
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
        <Link to="/contact">
          <i className="fa fa-envelope"></i>
        </Link>
      </div>
      <div className="copyright">
        Website code and content by Jody LeCompte. &copy;{" "}
        {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
