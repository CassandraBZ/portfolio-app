import homeimg from "../../assets/homeimg.png";

function Home() {
  return (
    <div className="home-section">
      <div className="home-title">
        <h1>Hello, moi c{"'"}est Cassandra</h1>
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
