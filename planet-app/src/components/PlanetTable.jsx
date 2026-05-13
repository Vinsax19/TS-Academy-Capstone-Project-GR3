const TABLE_DATA = [
  {
    group: "Terrestrial Planets",
    subgroup: null,
    planets: [
      { name: "Mercury", mass: "0.330",  diameter: "4,878",   density: "5,427", gravity: "3.7" },
      { name: "Venus",   mass: "4.870",  diameter: "12,104",  density: "5,243", gravity: "8.9" },
      { name: "Earth",   mass: "5.970",  diameter: "12,756",  density: "5,514", gravity: "9.8" },
      { name: "Mars",    mass: "0.642",  diameter: "6,792",   density: "3,933", gravity: "3.7" },
    ],
  },
  {
    group: "Jovian Planets",
    subgroup: "Gas Giants",
    planets: [
      { name: "Jupiter", mass: "1898", diameter: "142,984", density: "1,326", gravity: "23.1" },
      { name: "Saturn",  mass: "568",  diameter: "120,536", density: "687",   gravity: "9.0" },
    ],
  },
  {
    group: null,
    subgroup: "Ice Giants",
    planets: [
      { name: "Uranus",  mass: "86.8", diameter: "51,118", density: "1,271", gravity: "8.7" },
      { name: "Neptune", mass: "102",  diameter: "49,528", density: "1,638", gravity: "11.0" },
    ],
  },
  {
    group: "Dwarf Planets",
    subgroup: null,
    planets: [
      { name: "Pluto", mass: "0.0130", diameter: "2,376", density: "2,095", gravity: "0.7" },
    ],
  },
];

export default function PlanetTable() {
  const rows = [];

  TABLE_DATA.forEach((group) => {
    group.planets.forEach((planet, pi) => {
      const isFirst = pi === 0;
      rows.push(
        <tr key={planet.name} style={rows.length % 2 === 0 ? styles.trOdd : styles.trEven}>
          {group.group && isFirst && (
            <td rowSpan={group.planets.length} style={styles.tdGroup}>
              {group.group}
            </td>
          )}
          {group.subgroup && isFirst && (
            <td rowSpan={group.planets.length} style={styles.tdSubgroup}>
              {group.subgroup}
            </td>
          )}
          {!group.group && !group.subgroup && isFirst && <td style={styles.tdEmpty} />}
          <td style={styles.td}>{planet.name}</td>
          <td style={styles.td}>{planet.mass}</td>
          <td style={styles.td}>{planet.diameter}</td>
          <td style={styles.td}>{planet.density}</td>
          <td style={styles.td}>{planet.gravity}</td>
        </tr>
      );
    });
  });

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Planetary Facts at a Glance</h2>
      <p style={styles.subtitle}>
        Below is a comparative table of major planets in our solar system. The data highlights
        key physical properties used by astronomers and researchers worldwide.
      </p>
      <p style={styles.caption}>Data about the planets of our solar system (Planetary facts taken from NASA)</p>
      <div style={styles.tableWrap}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th colSpan={2} style={styles.th}></th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Mass (10²⁴kg)</th>
              <th style={styles.th}>Diameter (km)</th>
              <th style={styles.th}>Density (kg/m³)</th>
              <th style={styles.th}>Gravity (m/s²)</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </section>
  );
}

const styles = {
  section: { padding: "70px 60px" },
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
    margin: "0 auto 16px",
    lineHeight: 1.7,
  },
  caption: { fontSize: 13, color: "#888", marginBottom: 14 },
  tableWrap: { overflowX: "auto" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: 13 },
  th: {
    background: "#1565c0",
    color: "#fff",
    padding: "10px 14px",
    textAlign: "left",
    fontWeight: 600,
    fontSize: 13,
  },
  tdGroup: {
    background: "#1565c0",
    color: "#fff",
    padding: "8px 14px",
    fontWeight: 600,
    fontSize: 12,
    textAlign: "center",
    verticalAlign: "middle",
    borderRight: "1px solid rgba(255,255,255,0.2)",
  },
  tdSubgroup: {
    background: "#e3ecfa",
    color: "#1565c0",
    padding: "8px 14px",
    fontWeight: 600,
    fontSize: 12,
    textAlign: "center",
    verticalAlign: "middle",
    borderRight: "1px solid #c5d5ea",
  },
  tdEmpty: { padding: 0 },
  td: {
    padding: "9px 14px",
    borderBottom: "1px solid #e8ecf4",
    color: "#333",
  },
  trOdd: { background: "#fff" },
  trEven: { background: "#f8faff" },
};
