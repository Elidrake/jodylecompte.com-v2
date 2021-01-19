import React, { useState } from "react"
import ImageGallery from "react-image-gallery"

import Layout from "../components/layout"
import SEO from "../components/seo"

const projects = [
  {
    original: "/portfolio/slimwhizzy.png",
    thumbnail: "/portfolio/slimwhizzy.png",
    name: "SlimWhizzy",
    desc:
      "SlimWhizzy is a micro-library written in JavaScript for creating WYSIWYG text editors in the browser.",
    demo: "https://slimwhizzy.jodylecompte.com",
    github: "https://github.com/jodylecompte/slimwhizzy",
  },
  {
    original: "/portfolio/adlinx.png",
    thumbnail: "/portfolio/adlinx.png",
    name: "AdLinx",
    desc:
      "AdLinx is a URL shortener and URL manager optimized for digital marketers, implemented in Laravel.",
    github: "https://github.com/jodylecompte/adlinx",
  },
]

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <Layout>
      <SEO title="Portfolio" />
      <div className="portfolio">
        <h1>Portfolio</h1>
        {projects.map((project, idx) => {
          return (
            <>
              <div className="portfolio-item">
                <div className="portfolio-header">
                  <h2>{project.name}</h2>
                </div>
                <div className="portfolio-image">
                  <img src={project.original} alt={project.desc} />
                </div>
                <div className="portfolio-desc">{project.desc}</div>
                <div className="portfolio-buttons">
                  {project.github && (
                    <a
                      href={projects[idx].github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      Github
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={projects[idx].demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
              {idx != projects.length - 1 ? <hr /> : ""}
            </>
          )
        })}
      </div>
    </Layout>
  )
}

export default Portfolio
