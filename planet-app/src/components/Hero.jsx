function Globe() {
  return (
    <div style={styles.globe}>
      <div style={styles.globeHighlight} />
      <div style={{ ...styles.continent, top: "25%", left: "20%", width: "35%", height: "18%" }} />
      <div style={{ ...styles.continent, top: "45%", left: "35%", width: "25%", height: "15%" }} />
      <div style={{ ...styles.continent, top: "65%", left: "15%", width: "30%", height: "12%" }} />
      <div style={{ ...styles.continent, top: "30%", right: "15%", width: "20%", height: "25%" }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.heroText}>
        <h1 style={styles.title}>Explore Our Solar System Through Data</h1>
        <p style={styles.subtitle}>
          Understand the planets not just by name, but by measurable facts. From size and mass
          to gravity and density, this page breaks down the solar system in a clear, data-driven way.
        </p>
        <div style={styles.buttons}>
          <button style={styles.btnPrimary}>Explore the Data</button>
          <button style={styles.btnOutline}>Contact Us</button>
        </div>
      </div>
      <Globe />
    </section>
  );
}

const styles = {
  hero: {
    background: "#0d1b4b",
    padding: "60px 60px 80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 40,
    minHeight: 320,
  },
  heroText: { flex: 1, maxWidth: 480 },
  title: {
    fontSize: 40,
    fontWeight: 700,
    color: "#fff",
    lineHeight: 1.2,
    margin: "0 0 16px",
  },
  subtitle: {
    fontSize: 14,
    color: "#a8b8d8",
    lineHeight: 1.7,
    margin: "0 0 28px",
    maxWidth: 380,
  },
  buttons: { display: "flex", gap: 12 },
  btnPrimary: {
    background: "#1565c0",
    color: "#fff",
    border: "none",
    padding: "10px 22px",
    borderRadius: 6,
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
  },
  btnOutline: {
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.4)",
    padding: "10px 22px",
    borderRadius: 6,
    fontSize: 14,
    cursor: "pointer",
  },
  globe: {
    width: 280,
    height: 280,
    borderRadius: "50%",
    background: "radial-gradient(circle at 40% 40%, #1a6fa8, #0a2d6e, #04152e)",
    flexShrink: 0,
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 0 60px rgba(74,158,255,0.3)",
  },
  globeHighlight: {
    position: "absolute",
    top: 30,
    left: 50,
    width: 90,
    height: 60,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.08)",
    transform: "rotate(-30deg)",
  },
  continent: {
    position: "absolute",
    background: "rgba(255,255,255,0.12)",
    borderRadius: 4,
  },
};
