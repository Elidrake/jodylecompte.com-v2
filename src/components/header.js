import { Link } from "gatsby"
import React, { useState } from "react"
import { HamburgerVortex } from "react-animated-burgers"

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div className="brand">
        <Link to="/">
          <span class="logo-box">J</span>
          <span class="brand-accent">Jody </span>
          LeCompte
        </Link>
      </div>
      <div
        class={menuOpen ? "menu open" : "menu"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <HamburgerVortex isActive={menuOpen} buttonWidth="30" />
      </div>
    </header>
  )
}

export default Header
