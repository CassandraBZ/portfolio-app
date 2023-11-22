import Proptypes from "prop-types";

function ProjectCard({ imageSrc, altText, title, description, technologies }) {
  return (
    <div className="wrapper">
      <div className="image">
        <img src={imageSrc} alt={altText} className="img" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
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
