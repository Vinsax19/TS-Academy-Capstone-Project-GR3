export default function VideoSection() {
  return (
    <section style={styles.section}>
      <div style={styles.videoBox}>
        <div style={styles.videoOverlay} />
        <div style={styles.progressBar}>
          <div style={styles.progressFill} />
        </div>
        <div style={styles.playBtn}>
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
            <path d="M1 1L17 10L1 19V1Z" fill="#1565c0" />
          </svg>
        </div>
      </div>

      <div style={styles.textBox}>
        <h2 style={styles.title}>How Planetary Data Helps Us Understand Space</h2>
        <p style={styles.body}>
          Planetary science goes beyond images. Comparing{" "}
          <span style={styles.highlight}>mass</span>,{" "}
          <span style={styles.highlight}>diameter</span>,{" "}
          <span style={styles.highlight}>gravity</span>, and{" "}
          <span style={styles.highlight}>density</span>, we gain insight into how planets form,
          behave, and interact within the solar system.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "70px 60px",
    display: "flex",
    gap: 60,
    alignItems: "center",
  },
  videoBox: {
    width: 320,
    height: 220,
    borderRadius: 12,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
  },
  videoOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, #071a4a 0%, #0d3070 50%, #1a5296 100%)",
  },
  progressBar: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    height: 2,
    background: "rgba(255,255,255,0.1)",
    borderRadius: 2,
  },
  progressFill: {
    width: "35%",
    height: "100%",
    background: "rgba(255,255,255,0.4)",
    borderRadius: 2,
  },
  playBtn: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  textBox: { flex: 1 },
  title: {
    fontSize: 22,
    fontWeight: 700,
    color: "#0d47a1",
    lineHeight: 1.3,
    margin: "0 0 14px",
  },
  body: {
    fontSize: 14,
    color: "#444",
    lineHeight: 1.8,
  },
  highlight: { color: "#1565c0", fontWeight: 600 },
};
