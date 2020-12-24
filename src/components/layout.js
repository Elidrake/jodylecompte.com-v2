/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "../styles/layout.css"
import Selfie from "../images/selfie.png"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="container">
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
        <hr />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
