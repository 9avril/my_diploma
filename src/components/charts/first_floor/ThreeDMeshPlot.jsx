import React from "react";
import Plot from "react-plotly.js";
import firstFloorData from "../../../data/data-floors/firstFloor";
import convexHull from "convex-hull";
import "../plotstyles.css";

const ThreeDMeshPlot = () => {
  const data = firstFloorData.flatMap((floor) => floor.APFound);

  const unpack = (key) => {
    return data.flatMap((item) => item.LS.map((row) => row[key]));
  };

  const points = data.flatMap((item) => item.LS);
  const hull = convexHull(points);
  const x = hull.map(([pointIndex]) => points[pointIndex][0]);
  const y = hull.map(([pointIndex]) => points[pointIndex][1]);
  const z = hull.map(([pointIndex]) => points[pointIndex][2]);

  const minZ = Math.min(...z);
  const maxZ = Math.max(...z);
  const normalizedZ = z.map((value) => (value - minZ) / (maxZ - minZ));

  const colorscale = normalizedZ.map((val) => {
    if (val < 0.5) {
      return "#212442";
    } else if (val < 1) {
      return "#9194b7";
    } else {
      return "#1a1b2b";
    }
  });

  const traces = [
    {
      opacity: 0.8,
      type: "mesh3d",
      x: x,
      y: y,
      z: z,
      facecolor: colorscale,
    },
  ];

  const layout = {
    autosize: true,
    width: 500,
    height: 500,
    scene: {
      aspectratio: {
        x: 1,
        y: 1,
        z: 1,
      },
      camera: {
        center: {
          x: 0,
          y: 0,
          z: 0,
        },
        eye: {
          x: 1.25,
          y: 1.25,
          z: 1.25,
        },
        up: {
          x: 0,
          y: 0,
          z: 1,
        },
      },
      xaxis: {
        type: "linear",
        zeroline: false,
        gridcolor: "rgba(30, 37, 40, 0.1)",
      },
      yaxis: {
        type: "linear",
        zeroline: false,
        gridcolor: "rgba(30, 37, 40, 0.1)",
      },
      zaxis: {
        type: "linear",
        zeroline: false,
        gridcolor: "rgba(30, 37, 40, 0.1)",
      },
    },
    title: "3D Mesh Plot",
    margin: { l: 30, r: 30, b: 30, t: 30 },
    plot_bgcolor: "transparent",
    paper_bgcolor: "transparent",
    font: { color: "#FFFFFF" },
  };

  const plotStyle = {};

  const plotContainerStyle = {};

  return (
    <div style={plotStyle}>
      <div style={plotContainerStyle}>
        <div className="plot-container">
          <Plot data={traces} layout={layout} />
        </div>
      </div>
    </div>
  );
};

export default ThreeDMeshPlot;
