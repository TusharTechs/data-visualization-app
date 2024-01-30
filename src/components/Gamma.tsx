import React from 'react';
import { calculateGammaStats, WineData } from '../utils/stats';
import "../App.css";

// Interface defining the props for the Gamma component
interface GammaProps {
  data: WineData[];
}

// Functional component Gamma
const Gamma: React.FC<GammaProps> = ({ data }) => {
  // Calculate gamma statistics using the provided data
  const classStats = calculateGammaStats(data);

  // Render a table displaying gamma statistics
  return (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          {Object.keys(classStats).map((className) => (
            <th key={className}>{className}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gamma Mean</td>
          {Object.values(classStats).map((stats, index) => (
            <td key={index}>{stats.mean.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>Gamma Median</td>
          {Object.values(classStats).map((stats, index) => (
            <td key={index}>{stats.median.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>Gamma Mode</td>
          {Object.values(classStats).map((stats, index) => (
            <td key={index}>{stats.mode.toFixed(3)}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Gamma;
