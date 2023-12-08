import { useState } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import logo from "../assets/logo-portfolio.svg";

import "../assets/css/Nav.css";

function NavBar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div className={`navigation ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div>
        <img
          src={logo}
          alt="Logo lien accueil"
          onClick={scrollToTop}
          className="nav-logo"
        />
      </div>
      <div className="nav-links">
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
          onClick={handleShowLinks}
        >
          Accueil
        </Link>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
          onClick={handleShowLinks}
        >
          A propos
        </Link>
        <Link
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
          onClick={handleShowLinks}
        >
          Compétences
        </Link>
        <Link
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
          onClick={handleShowLinks}
        >
          Projets
        </Link>
        <Link
          activeClass="active"
          to="section5"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
          onClick={handleShowLinks}
        >
          Contacts
        </Link>
      </div>
      <button className="nav-burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </div>
  );
}

export default NavBar;
