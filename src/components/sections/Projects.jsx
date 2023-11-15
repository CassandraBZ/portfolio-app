import portfolio from "../../assets/Portfolio-project.jpg";
import oniriq from "../../assets/Oniriq-project.jpg";
import notes from "../../assets/Notes-project.jpg";
import hackathon from "../../assets/Hackathon-project.jpg";

function Projects() {
  return (
    <div className="projects-section">
      <h1>Mes projets</h1>
      <div className="projects-illustrations">
        <div className="wrapper">
          <div className="image">
            <img src={portfolio} alt="projet portfolio" className="img" />
          </div>
          <div className="content">
            <h3>Portfolio</h3>
            <p>Premier projet de création d’un portfolio d’équipe</p>
            <p>HTML, CSS, Javascript</p>
          </div>
        </div>
        <div>
          <div className="wrapper">
            <div className="image">
              <img src={oniriq} alt="projet oniriq" className="img" />
            </div>
            <div className="content">
              <h3>Oniriq</h3>
              <p>Projet concept de site e-commerce pour vendre des rêves.</p>
              <p>HTML, CSS, Javascript, REACT</p>
            </div>
          </div>
        </div>
        <div>
          <div className="wrapper">
            <div className="image">
              <img src={notes} alt="projet notes" className="img" />
            </div>
            <div className="content">
              <h3>Notes</h3>
              <p>Projet d’application web et web mobile de création de notes</p>
              <p>HTML, CSS, Javascript, REACT, EXPRESS, Node.js, MySQL</p>
            </div>
          </div>
        </div>
        <div>
          <div className="wrapper">
            <div className="image">
              <img src={hackathon} alt="hackathon" className="img" />
            </div>
            <div className="content">
              <h3>Hackathon</h3>
              <p>
                Projet de hackathon (gagnant) une application de commande de
                repas pour la préhistoire.
              </p>
              <p>HTML, CSS, Javascript, REACT, EXPRESS, Node.js, MySQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
