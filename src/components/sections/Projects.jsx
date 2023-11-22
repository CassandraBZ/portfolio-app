import portfolio from "../../assets/Portfolio-project.jpg";
import oniriq from "../../assets/Oniriq-project.jpg";
import notes from "../../assets/Notes-project.jpg";
import hackathon from "../../assets/Hackathon-project.jpg";

import ProjectCard from "../ProjectCard";

import "../../assets/css/Project.css";

function Projects() {
  return (
    <div className="projects-section">
      <h1 className="project-title outline">Mes projets</h1>
      <p className="info-project">
        Appuyez pour avoir plus d{"'"}informations sur un projet
      </p>
      <div className="projects-illustrations">
        <ProjectCard
          imageSrc={portfolio}
          altText="projet portfolio"
          title="Portfolio"
          description="Premier projet de création d’un portfolio d’équipe"
          technologies="HTML, CSS, Javascript"
        />
        <div>
          <ProjectCard
            imageSrc={oniriq}
            altText="projet oniriq"
            title="Oniriq"
            description="Projet concept de site e-commerce pour vendre des rêves."
            technologies="HTML, CSS, Javascript, REACT"
          />
        </div>
        <div>
          <ProjectCard
            imageSrc={notes}
            altText="projet notes"
            title="Notes"
            description="Projet d’application web et web mobile de création de notes."
            technologies="HTML, CSS, Javascript, REACT, EXPRESS, Node.js, MySQL"
          />
        </div>
        <div>
          <ProjectCard
            imageSrc={hackathon}
            altText="hackathon"
            title="Hackathon"
            description="Projet de hackathon (gagnant) une application de commande de
          repas pour la préhistoire.."
            technologies="HTML, CSS, Javascript, REACT, EXPRESS, Node.js, MySQL"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
