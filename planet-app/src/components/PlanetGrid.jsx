import React, { useState, useEffect } from 'react';

const PLANET_COLORS = [
  ["#8a8a8a", "#555555"],
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
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Fetch API implementation
  useEffect(() => {
    const URL = '/Planets.json';

    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch planetary data');
        }
        return response.json();
      })
      .then((data) => {
        setPlanets(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="explore-data" style={styles.section}>
      <h2 style={styles.title}>Visualizing the Differences Between Planets</h2>
      <p style={styles.subtitle}>
        Each planet in our solar system has unique physical characteristics. Visual comparisons 
        help highlight how vastly different terrestrial planets are from gas giants and ice giants.
      </p>

      {loading && <div style={{ color: '#555', textAlign: 'center' }}>Loading planetary data...</div>}
      {error && <div style={{ color: 'red', textAlign: 'center' }}>Error: {error}</div>}

      {!loading && !error && (
        <div style={styles.grid}>
          {planets.map((planet, idx) => (
            <figure key={planet.name || idx} style={styles.card}>
              {/* REPLACED <PlanetImage idx={idx} /> WITH A REAL IMAGE TAG */}
              <img 
                src={planet.image} 
                alt={planet.name} 
                style={{ width: '100%', height: 160, objectFit: 'cover' }} 
              />
              <figcaption style={styles.info}>
                <h3 style={styles.name}>{planet.name}</h3>
                <p style={styles.distance}>{planet.distance}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        
      )}
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
    margin: 0,
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
  name: { 
    fontSize: 15, 
    fontWeight: 600, 
    color: "#1a1a2e", 
    margin: "0 0 2px" 
  },
  distance: { 
    fontSize: 12, 
    color: "#666", 
    margin: 0 
  },
};