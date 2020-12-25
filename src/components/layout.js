import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Sidebar from "react-sidebar"

import Header from "./header"
import Footer from "./footer"
import SidebarContent from "./sidebar"

import "../styles/layout.css"
import Selfie from "../images/selfie.png"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
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
    <Sidebar
      sidebar={<SidebarContent />}
      open={menuOpen}
      onSetOpen={setMenuOpen}
      styles={{ sidebar: { background: "white", width: "250px" } }}
    >
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
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
    </Sidebar>
  )
}

export default Layout
