import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <Layout>
      <SEO title="Contact Me" />
      <div className="contact-form">
        <h1 style={{ textAlign: "center" }}>Contact Me</h1>
        <p>
          Have a question about one of the blog posts featured on this site?
          Want to collaborate on a project? Just want to get in touch? I'd love
          to hear from you!
        </p>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="./thank-you"
        >
          <div className="form-group">
            <label htmlFor="frmName">Name: </label>
            <input
              type="text"
              className="form-control"
              id="frmName"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="frmEmail">Email: </label>
            <input
              type="email"
              className="form-control"
              id="frmEmail"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="frmSubject">Subject: </label>
            <input
              type="text"
              className="form-control"
              id="frmSubject"
              placeholder="Subject"
            />
          </div>
          <div className="form-group">
            <label htmlFor="frmMessage">Message:</label>
            <textarea
              className="form-control"
              id="frmMessage"
              rows="3"
            ></textarea>
          </div>
          <div class="form-submit">
            <button class="btn">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
