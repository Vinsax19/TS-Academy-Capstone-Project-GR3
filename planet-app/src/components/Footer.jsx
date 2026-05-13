export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.top}>
        <div>
          <p style={styles.aboutTitle}>About</p>
          <p style={styles.aboutText}>First name of group members</p>
        </div>
      </div>
      <div style={styles.bottom}>
        <span>©2026 Design by Amaka & Ifeoma R. Built by Greatname. All rights reserved</span>
        <span style={styles.brand}>TSAcademy</span>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#0d1b4b",
    color: "#a8b8d8",
    padding: "40px 60px 24px",
  },
  top: {
    marginBottom: 30,
  },
  aboutTitle: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 15,
    margin: "0 0 8px",
  },
  aboutText: {
    fontSize: 13,
    lineHeight: 1.7,
    color: "#7a8fb5",
    margin: 0,
  },
  bottom: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 12,
    color: "#7a8fb5",
  },
  brand: {
    color: "#4a9eff",
    fontWeight: 600,
  },
};
