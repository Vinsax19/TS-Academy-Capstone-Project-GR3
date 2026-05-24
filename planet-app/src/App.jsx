import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import VideoSection from "./components/VideoSection";
import PlanetGrid from "./components/PlanetGrid";
import PlanetTable from "./components/PlanetTable";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import './index.css'

export default function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth"});
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", margin: 0, padding: 0 }}>
      <Navbar />
      <Hero onExplore={() => scrollToSection("planet-details")} onContact={() => scrollToSection("contact")} />
      <VideoSection />
      <div id="planet-details">
        <PlanetGrid />
        <PlanetTable />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
