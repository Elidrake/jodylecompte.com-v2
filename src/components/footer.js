import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <a href="#">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fa fa-github"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa fa-envelope"></i>
        </a>
      </div>
      <div className="copyright">
        Website code and content by Jody LeCompte. &copy;{" "}
        {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
