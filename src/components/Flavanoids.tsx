import React from 'react';
import { calculateFlavanoidsStats, WineData } from '../utils/stats';
import "../App.css";

// Interface defining the props for the Flavanoids component
interface FlavanoidsProps {
  data: WineData[];
}

// Functional component Flavanoids
const Flavanoids: React.FC<FlavanoidsProps> = ({ data }) => {
  // Calculate flavanoids statistics using the provided data
  const classStats = calculateFlavanoidsStats(data);

  // Render a table displaying flavanoids statistics
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
          <td>Flavanoids Mean</td>
          {Object.values(classStats).map((stats, index) => (
            <td key={index}>{stats.mean.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>Flavanoids Median</td>
          {Object.values(classStats).map((stats, index) => (
            <td key={index}>{stats.median.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>Flavanoids Mode</td>
          {Object.values(classStats).map((stats, index) => (
            <td key={index}>{stats.mode.toFixed(3)}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Flavanoids;
