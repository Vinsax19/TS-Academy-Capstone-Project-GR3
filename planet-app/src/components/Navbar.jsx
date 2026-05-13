const NAV_LINKS = ["Home", "About", "Planets", "Contact"];

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <div style={styles.logoIcon}>✦</div>
        planet
      </div>
      <ul style={styles.navLinks}>
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a href="#" style={styles.navLink}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    background: "#0d1b4b",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 60px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    color: "#fff",
    fontWeight: 600,
    fontSize: 16,
    textDecoration: "none",
  },
  logoIcon: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    border: "2px solid #4a9eff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#4a9eff",
    fontSize: 14,
  },
  navLinks: {
    display: "flex",
    gap: 32,
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: "#ccd6f6",
    textDecoration: "none",
    fontSize: 14,
    cursor: "pointer",
  },
};
