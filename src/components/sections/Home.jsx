import homeimg from "../../assets/homeimg.png";

import "../../assets/css/Home.css";

function Home() {
  return (
    <div className="home-section">
      <div className="home-title">
        <h1>
          <span className="outline">Hello, moi c{"'"}est</span>{" "}
          <span className="underline">Cassan</span>dra
        </h1>
        <h2>
          Web développeuse <span className="accent-text">&</span> Designer
        </h2>
      </div>
      <div className="home-img">
        <img src={homeimg} alt="home" />
      </div>
    </div>
  );
}

export default Home;
