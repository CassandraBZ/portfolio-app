import homeimg from "../../assets/homeimg.png";

import "../../assets/css/About.css";
// import { useEffect } from "react";

function About() {
  const text =
    "Après 4 ans à étudier la psychologie de la santé, je suis devenue UX/UI Designer en freelance pendant un peu plus d’un an. Ayant toujours soif d’apprendre je me suis lancée par la suite dans le développement web !";

  // const words = ["créative", "empathique", "organisée", "persévérente"];

  // let intervalWord = null;

  // const changeWordbByTime = () => {
  //   let i = 1;
  //   intervalWord = setInterval(() => {
  //     if (i === words.length) {
  //       i = 0;
  //     }
  //     document.querySelector(".change-word").innerHTML = words[i];
  //     i++;
  //   }, 2000);
  // };

  // useEffect(() => {
  //   changeWordbByTime();
  //   return () => {
  //     clearInterval(intervalWord);
  //   };
  // });

  return (
    <div className="about-section">
      <div className="home-img">
        <img src={homeimg} alt="image" />
      </div>
      <div className="about-description">
        <div className="about-text">
          <h1>Qui je suis ?</h1>
          <div className="wrapper-text">
            <h3>
              Une personne
              <div className="animation">
                <span className="word">créative</span>
                <span className="word">empathique</span>
                <span className="word">organisée</span>
                <span className="word">persévérente</span>
                <span className="word">créative</span>
              </div>
            </h3>
          </div>
          <p>{text}</p>
        </div>
        <div className="graduations-container">
          <div className="graduations">
            <p className="date-graduation">2012-2015</p>
            <hr className="line-grade" />
            <p>Licence psychologie</p>
          </div>
          <div className="graduations">
            <p className="date-graduation">2015-2017</p>
            <hr className="line-grade" />
            <p>Maîtrise psychologie</p>
          </div>
          <div className="graduations">
            <p className="date-graduation">2019-2020</p>
            <hr className="line-grade" />
            <p>Formation UX design</p>
          </div>
          <div className="graduations">
            <p className="date-graduation">2022-2023</p>
            <hr className="line-grade" />
            <p>Formation web développeuse</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
