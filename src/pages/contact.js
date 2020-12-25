import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
  function submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      window.location = "/thank-you"
    }
    xhr.send(data)
  }

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
          action="https://formspree.io/f/mrgepdoe"
          onSubmit={submitForm}
        >
          <input type="hidden" name="form-name" value="Contact Me" />
          <div className="form-group">
            <label htmlFor="frmName">Name: </label>
            <input
              type="text"
              className="form-control"
              id="frmName"
              name="frmName"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="frmEmail">Email: </label>
            <input
              type="email"
              className="form-control"
              id="frmEmail"
              name="frmEmail"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="frmSubject">Subject: </label>
            <input
              type="text"
              className="form-control"
              id="frmSubject"
              name="frmSubject"
              placeholder="Subject"
            />
          </div>
          <div className="form-group">
            <label htmlFor="frmMessage">Message:</label>
            <textarea
              className="form-control"
              id="frmMessage"
              rows="3"
              name="frmMessage"
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
