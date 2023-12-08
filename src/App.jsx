import { Element } from "react-scroll";

import NavBar from "./components/NavBar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contacts from "./components/sections/Contacts";
import VerticalNavbar from "./components/VerticalNavbar";
import Cursor from "./components/Cursor";

function App() {
  return (
    <>
      <Cursor />
      <NavBar />
      <VerticalNavbar />
      <Element name="section1" className="element">
        <Home />
      </Element>
      <Element name="section2" className="element">
        <About />
      </Element>
      <Element name="section3" className="element">
        <Skills />
      </Element>
      <Element name="section4" className="element">
        <Projects />
      </Element>
      <Element name="section5" className="element">
        <Contacts />
      </Element>
    </>
  );
}

export default App;
