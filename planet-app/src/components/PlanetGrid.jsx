const PLANETS = [
  { name: "Mercury", distance: "57.9 million km" },
  { name: "Venus",   distance: "108.2 million km" },
  { name: "Earth",   distance: "149.6 million km" },
  { name: "Mars",    distance: "227.9 million km" },
  { name: "Jupiter", distance: "778.5 million km" },
  { name: "Saturn",  distance: "1.43 billion km" },
  { name: "Uranus",  distance: "2.87 billion km" },
  { name: "Neptune", distance: "4.50 billion km" },
  { name: "Pluto",   distance: "5.91 billion km" },
];

const PLANET_COLORS = [
  ["#8a8a8a", "#555"],
  ["#e8cda0", "#b5940a"],
  ["#4fa3e0", "#1a6a9a"],
  ["#c1440e", "#7a2800"],
  ["#c88b3a", "#8a5a1a"],
  ["#e4d191", "#a08030"],
  ["#5580aa", "#2a4a6a"],
  ["#3060a8", "#1a3a6a"],
  ["#a0789a", "#6a3a60"],
];

function PlanetImage({ idx }) {
  const [c1, c2] = PLANET_COLORS[idx % PLANET_COLORS.length];
  return (
    <div style={{
      ...styles.imgBox,
      background: `radial-gradient(circle at 35% 35%, ${c1}, ${c2})`,
    }}>
      <div style={styles.highlight} />
      <div style={styles.shadow} />
    </div>
  );
}

export default function PlanetGrid() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Visualizing the Differences Between Planets</h2>
      <p style={styles.subtitle}>
        Each planet in our solar system has unique physical characteristics. Visual comparisons
        help highlight how vastly different terrestrial planets are from gas giants and ice giants.
      </p>
      <div style={styles.grid}>
        {PLANETS.map((planet, idx) => (
          <div key={planet.name} style={styles.card}>
            <PlanetImage idx={idx} />
            <div style={styles.info}>
              <p style={styles.name}>{planet.name}</p>
              <p style={styles.distance}>{planet.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "70px 60px",
    background: "#f0f4ff",
  },
  title: {
    fontSize: 26,
    fontWeight: 700,
    color: "#0d47a1",
    textAlign: "center",
    margin: "0 0 10px",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    maxWidth: 560,
    margin: "0 auto 40px",
    lineHeight: 1.7,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
  },
  card: {
    background: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },
  imgBox: {
    width: "100%",
    height: 160,
    position: "relative",
    overflow: "hidden",
  },
  highlight: {
    position: "absolute",
    top: "15%",
    left: "20%",
    width: "30%",
    height: "20%",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.08)",
  },
  shadow: {
    position: "absolute",
    bottom: "20%",
    right: "15%",
    width: "40%",
    height: "12%",
    borderRadius: "50%",
    background: "rgba(0,0,0,0.15)",
  },
  info: {
    padding: "10px 14px 14px",
    textAlign: "center",
  },
  name: { fontSize: 13, fontWeight: 600, color: "#1a1a2e", margin: "0 0 2px" },
  distance: { fontSize: 12, color: "#666", margin: 0 },
};
