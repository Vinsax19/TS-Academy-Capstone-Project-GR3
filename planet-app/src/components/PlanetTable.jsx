import React from "react";

const PlanetaryFacts = () => {
  const planetaryData = [
    {
      category: "Terrestrial Planets",
      planets: ["Mercury", "Venus", "Earth", "Mars"],
    },
    {
      category: "Jovian Planets",
      subCategories: [
        {
          label: "Gas Giants",
          planets: ["Jupiter", "Saturn"],
        },
        {
          label: "Ice Giants",
          planets: ["Uranus", "Neptune"],
        },
      ],
    },
    {
      category: "Dwarf Planets",
      planets: ["Pluto"],
    },
  ];

  const dataValues = {
    mass: "0.330",
    diameter: "4,878",
    density: "5427",
    gravity: "3.7",
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Planetary Facts at a Glance</h1>

        <p className="subtitle">
          Below is a comparative table of major planets in our solar system. The
          data highlights key physical properties used by astronomers and
          researchers worldwide.
        </p>

        <h3 className="table-heading">
          Data about the planets of our solar system (Planetary facts taken from NASA)
        </h3>

        <div className="table-wrapper">
          <table className="planet-table">
            <thead>
              <tr>
                <th colSpan="2"></th>
                <th>Name</th>
                <th>Mass (10 24kg)</th>
                <th>Diameter (km)</th>
                <th>Density (kg/m3)</th>
                <th>Gravity (m/s2)</th>
              </tr>
            </thead>

            <tbody>
              {planetaryData[0].planets.map((planet, index) => (
                <tr key={planet}>
                  {index === 0 && (
                    <td className="category" rowSpan={4} colSpan="2">
                      {planetaryData[0].category}
                    </td>
                  )}
                  <td>{planet}</td>
                  <td>{dataValues.mass}</td>
                  <td>{dataValues.diameter}</td>
                  <td>{dataValues.density}</td>
                  <td>{dataValues.gravity}</td>
                </tr>
              ))}

              {planetaryData[1].subCategories.map((group, groupIndex) =>
                group.planets.map((planet, index) => (
                  <tr key={planet}>
                    {groupIndex === 0 && index === 0 && (
                      <td className="category" rowSpan="4">
                        {planetaryData[1].category}
                      </td>
                    )}

                    {index === 0 && (
                      <td className="subcategory" rowSpan={group.planets.length}>
                        {group.label}
                      </td>
                    )}

                    <td>{planet}</td>
                    <td>{dataValues.mass}</td>
                    <td>{dataValues.diameter}</td>
                    <td>{dataValues.density}</td>
                    <td>{dataValues.gravity}</td>
                  </tr>
                ))
              )}

              <tr>
                <td className="category" colSpan="2">
                  {planetaryData[2].category}
                </td>
                <td>{planetaryData[2].planets[0]}</td>
                <td>{dataValues.mass}</td>
                <td>{dataValues.diameter}</td>
                <td>{dataValues.density}</td>
                <td>{dataValues.gravity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* STYLE AT BOTTOM */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #f3f4f6;
          font-family: Arial, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 40px auto;
          padding: 20px;
        }

        .title {
          color: #1d4ed8;
          font-size: 42px;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .subtitle {
          color: #4b5563;
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        .table-heading {
          font-size: 20px;
          margin-bottom: 20px;
          font-weight: bold;
          color: #1f2937;
        }

        .table-wrapper {
         border-radius: 18px;
          overflow: hidden; /* clips white corners */
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
          background: white;
        }

        .planet-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: white;
        }

        .planet-table thead th {
          background: #1d4ed8;
          color: white;
          padding: 18px;
          text-align: center;
        }

        .planet-table td {
          padding: 20px;
          text-align: center;
          border: 1px solid #e5e7eb;
          background: #f9fafb;
        }

        .category,
        .subcategory {
          background: #dbeafe !important;
          font-weight: 700;
        }

        /* 🔥 HIDE EVERYTHING ON MOBILE */
        @media (max-width: 768px) {
          .container {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default PlanetaryFacts;