import linkedin from "../../assets/linkedin-icon.svg";
import github from "../../assets/github-icon.svg";

import "../../assets/css/Contact.css";
import Mail from "../Mail";

function Contacts() {
  return (
    <div className="contact-section">
      <h1 className="contact-title">On reste en contact ?</h1>
      <div className="contact-content">
        <p>
          Vous pouvez m’écrire par email à l’adresse :
          <a> cassandra.blondez@gmail.com</a>
        </p>
        <br />
        <p>Ou me contacter via les réseaux sociaux :</p>
        <div className="social">
          <img src={linkedin} alt="linkedin" />
          <img src={github} alt="github" />
        </div>
        <Mail />
      </div>
    </div>
  );
}

export default Contacts;
