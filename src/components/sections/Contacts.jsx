import linkedin from "../../assets/linkedin-icon.svg";
import github from "../../assets/github-icon.svg";

import "../../assets/css/Contact.css";
import Mail from "../Mail";

import contactIllu from "../../assets/contact-illustration.png";

function Contacts() {
  return (
    <div className="contact-section">
      <h1 className="contact-title">On reste en contact ?</h1>
      <div className="contact-content">
        <div className="informations">
          <div className="mail">
            <p>Vous pouvez m’écrire par email en cliquant juste ici :</p>
            <Mail />
          </div>
          <br />
          <p>Ou me contacter via les réseaux sociaux :</p>
          <div className="social">
            <a href="https://www.linkedin.com/in/cassandra-blondez/">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/CassandraBZ">
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <img
          src={contactIllu}
          alt="illustration"
          className="contact-illustration"
        />
      </div>
    </div>
  );
}

export default Contacts;
