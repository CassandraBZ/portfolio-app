import "../../assets/css/Skills.css";

function Skills() {
  return (
    <div className="skill-section">
      <h1 className="outline">Ce que je sais faire</h1>
      <div className="skills-container">
        <div className="skills">
          <div className="skill-title-container">
            <span className="dot-skills"></span>
            <span className="dot-skills"></span>
            <span className="dot-skills"></span>
            <p className="skill-title">Développement</p>
          </div>

          <hr />
          <div className="skills-list">
            <li>
              <b>Programmation :</b> Javascript, HTML, CSS, tailwind
            </li>
            <li>
              <b>Frameworks :</b> React, Node.js, Express
            </li>
            <li>
              <b>Création base de donnés :</b> MySQL
            </li>
            <li>Connaissances en sécurité web</li>
          </div>
        </div>
        <div className="skills">
          <div className="skill-title-container">
            <span className="dot-skills"></span>
            <span className="dot-skills"></span>
            <span className="dot-skills"></span>
            <p className="skill-title">UX/UI Design</p>
          </div>
          <hr />
          <div className="skills-list">
            <li>Design d{"'"}interface</li>
            <li>Prototypage</li>
            <li>Recherche UX</li>
            <li>Tests et entretiens utilisateurs</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
