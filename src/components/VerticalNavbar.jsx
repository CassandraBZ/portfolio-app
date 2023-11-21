import { Link } from "react-scroll";

import arrowup from "../assets/arrow-up.svg";
import arrowdown from "../assets/arrow-down.svg";

function VerticalNavbar() {
  return (
    <div className="vertical-nav">
      <img src={arrowup} alt="fleche haut" className="arrows" />
      <div className="dot-container">
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span className="dot"> </span>
        </Link>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span className="dot"> </span>
        </Link>
        <Link
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span className="dot"> </span>
        </Link>
        <Link
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span className="dot"> </span>
        </Link>
        <Link
          activeClass="active"
          to="section5"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span className="dot"> </span>
        </Link>
      </div>
      <img src={arrowdown} alt="fleche bas" className="arrows" />
    </div>
  );
}

export default VerticalNavbar;
