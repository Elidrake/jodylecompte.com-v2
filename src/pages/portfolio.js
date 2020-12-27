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
        <ImageGallery
          items={projects}
          showFullscreenButton={false}
          showPlayButton={false}
          onSlide={index => setCurrentIndex(index)}
          showThumbnails={false}
        />
      </div>
      <div className="portfolio-item-details">
        <h2>{projects[currentIndex].name}</h2>
        <p>{projects[currentIndex].desc}</p>
        {projects[currentIndex].demo && (
          <a
            href={projects[currentIndex].demo}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Demo
          </a>
        )}
        {projects[currentIndex].github && (
          <a
            href={projects[currentIndex].github}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Github
          </a>
        )}
      </div>
    </Layout>
  )
}

export default Portfolio
