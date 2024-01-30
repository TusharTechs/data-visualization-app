import React, { useEffect, useState } from 'react';
import Flavanoids from './components/Flavanoids';
import Gamma from './components/Gamma';
import { WineData } from './utils/stats';
import "./App.css";

const App: React.FC = () => {
  const [wineData, setWineData] = useState<WineData[]>([]);

  // Fetch wine data from Wine-Data.json on component mount
  useEffect(() => {
    fetch('/Wine-Data.json')
      .then((response) => response.json())
      .then((data) => setWineData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Render loading message if wine data is still being fetched
  if (wineData.length === 0) {
    return <div>Loading...</div>;
  }

  // Render the main component with wine statistics
  return (
    <div className='container'>
      <div>
      <h1>Wine Stats</h1>
      <h2>Flavanoids Stats</h2>
      <Flavanoids data={wineData} />
      <h2>Gamma Stats</h2>
      <Gamma data={wineData} />
      </div>
    </div>
  );
};

export default App;
