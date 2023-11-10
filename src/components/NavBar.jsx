import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../assets/logo-portfolio.svg";

function NavBar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="navigation">
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
        >
          Projets
        </Link>
        <Link
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contacts
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
