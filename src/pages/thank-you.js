import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Thanks = () => {
  return (
    <Layout>
      <SEO title="Contact Me" />
      <div className="contact-form">
        <h1 style={{ textAlign: "center" }}>Thanks!</h1>
        <p style={{ textAlign: "center" }}>
          Your message has been received! I'll be in touch as soon as possible
        </p>
      </div>
    </Layout>
  )
}

export default Thanks
