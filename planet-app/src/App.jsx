import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import PlanetGrid from "./components/PlanetGrid";
import PlanetTable from "./components/PlanetTable";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", margin: 0, padding: 0 }}>
      <Navbar />
      <Hero />
      <VideoSection />
      <PlanetGrid />
      <PlanetTable />
      <ContactForm />
      <Footer />
    </div>
  );
}
