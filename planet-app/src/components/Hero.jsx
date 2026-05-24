import Earth from "../assets/Earth.png";
import "./Hero.css";

function Globe() {
  return (
    <div className="globe-wrapper globe-order">
      <img src={Earth} alt="Blue planet" className="globe-img" />
    </div>
  );
}

export default function Hero({ onExplore, onContact }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Explore Our Solar System Through Data</h1>
        <p>
          Understand the planets not just by name, but by measurable facts. From size and mass
          to gravity and density, this page breaks down the solar system in a clear, data-driven way.
        </p>
        <div className="buttons">
          <button onClick={onExplore} className="btn-primary">Explore the Data</button>
          <button onClick={onContact} className="btn-outline">Contact Us</button>
        </div>
      </div>
      <Globe />
    </section>
  );
}