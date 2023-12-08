import Proptypes from "prop-types";
import { useState } from "react";

function ProjectCard({ imageSrc, altText, title, description, technologies }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="wrapper" onClick={handleShow}>
      <div className="image">
        <img src={imageSrc} alt={altText} className="img" />
      </div>
      <div className={`content ${show ? "show" : ""}`}>
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p>{technologies}</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  imageSrc: Proptypes.string.isRequired,
  altText: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  technologies: Proptypes.string.isRequired,
};

export default ProjectCard;
