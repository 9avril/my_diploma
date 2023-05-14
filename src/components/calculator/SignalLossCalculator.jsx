import React, { useState } from "react";
import styles from "./SignalLossCalculator.module.css";

const SignalLossCalculator = ({ obstacles }) => {
  const [bandwidth, setBandwidth] = useState("");
  const [selectedObstacles, setSelectedObstacles] = useState([
    { obstacleType: "", material: "" },
  ]);
  const [calculatedBandwidth, setCalculatedBandwidth] = useState(null);

  const handleChangeObstacle = (e, index) => {
    const newObstacles = [...selectedObstacles];
    newObstacles[index].obstacleType = e.target.value;
    setSelectedObstacles(newObstacles);
  };

  const handleChangeMaterial = (e, index) => {
    const newObstacles = [...selectedObstacles];
    newObstacles[index].material = e.target.value;
    setSelectedObstacles(newObstacles);
  };

  const uniqueMaterials = [
    ...new Set(obstacles.map((obstacle) => obstacle.material)),
  ];

  const addObstacle = () => {
    setSelectedObstacles([
      ...selectedObstacles,
      { obstacleType: "", material: "" },
    ]);
  };

  const calculateBandwidth = () => {
    let newBandwidth = parseFloat(bandwidth);
    selectedObstacles.forEach((selectedObstacle) => {
      const obstacle = obstacles.find(
        (o) =>
          o.obstacle_type === selectedObstacle.obstacleType &&
          o.material === selectedObstacle.material
      );
      if (obstacle) {
        const signalLossPercent = parseFloat(obstacle.signal_loss_percent);
        newBandwidth = newBandwidth * (1 - signalLossPercent / 100);
      }
    });
    setCalculatedBandwidth(newBandwidth.toFixed(2));
  };

  return (
    <div className={styles.container}>
      <h3 className={`text-xl font-semibold mb-4 ${styles.textWhite}`}>
        Signal Loss Calculator
      </h3>
      <div className="mb-4">
        <label htmlFor="bandwidth" className={styles.textWhite}>
          Router Bandwidth (Mbps):
        </label>
        <input
          type="number"
          id="bandwidth"
          className={`ml-2 ${styles.inputSelect}`}
          value={bandwidth}
          onChange={(e) => setBandwidth(e.target.value)}
        />
      </div>
      {selectedObstacles.map((selectedObstacle, index) => (
        <div key={index} className="mb-4">
          <div className="mb-2">
            <label htmlFor={`obstacle-${index}`} className={styles.textWhite}>
              Obstacle:
            </label>
            <select
              id={`obstacle-${index}`}
              className={`block mt-1 ${styles.inputSelect}`}
              value={selectedObstacle.obstacleType}
              onChange={(e) => handleChangeObstacle(e, index)}
            >
              <option value="">Select an obstacle</option>
              {obstacles.map((obstacle) => (
                <option
                  key={obstacle.obstacle_type}
                  value={obstacle.obstacle_type}
                >
                  {obstacle.obstacle_type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={`material-${index}`} className={styles.textWhite}>
              Material:
            </label>
            <select
              value={selectedObstacle.material}
              onChange={(e) => handleChangeMaterial(e, index)}
              className={`block mt-1 ${styles.inputSelect}`}
            >
              <option value="">Select a material</option>
              {uniqueMaterials.map((materialItem) => (
                <option key={materialItem} value={materialItem}>
                  {materialItem}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}

      <button
        onClick={addObstacle}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Add Obstacle
      </button>
      <button
        onClick={calculateBandwidth}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Calculate
      </button>
      {calculatedBandwidth && (
        <p className={`mt-4 ${styles.textWhite}`}>
          Bandwidth after passing through the obstacles:{" "}
          <strong>{calculatedBandwidth} Mbps</strong>
        </p>
      )}
    </div>
  );
};

export default SignalLossCalculator;
