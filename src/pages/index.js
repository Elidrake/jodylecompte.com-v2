import React from "react"

import Selfie from "../images/selfie.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ children }) => (
  <Layout>
    <SEO title="Home" />
    <div className="home-header">
      <div className="photo">
        <img src={Selfie} />
      </div>
      <div className="about-me">
        <div className="title">Full-Stack Developer, Writer, Marketer</div>
        <div className="name">Jody LeCompte</div>
        <div className="desc">
          I am a father, fisherman, and full stack developer dedicated to
          helping others to learn and reach their maximum potential while I work
          to reach my own.
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
