import linkedin from "../../assets/linkedin-icon.svg";
import github from "../../assets/github-icon.svg";

function Contacts() {
  return (
    <div className="contact-section">
      <h1>On reste en contact ?</h1>
      <div className="contact-content">
        <p>
          Vous pouvez m’écrire par email à l’adresse :
          <a>cassandra.blondez@gmail.com</a>
        </p>
        <p>Ou me contacter via les réseaux sociaux :</p>
        <div className="social">
          <img src={linkedin} alt="linkedin" />
          <img src={github} alt="github" />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
