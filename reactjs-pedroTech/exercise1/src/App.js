import './App.css';
import { Planet } from './Components/Planet';

function App() {
  const planets = [
    { "name": "Jupiter", "isGasPlanet": true},
    { "name": "Earth", "isGasPlanet": false},
    { "name": "Mars", "isGasPlanet": false},
    { "name": "Saturn", "isGasPlanet": true}
  ];

  return (
    <div className="App">
      { planets.map((planet) => {
        const name = planet.isGasPlanet ? planet.name : "";
        return <Planet name={name} />;
      })}
    </div>
  );
}

export default App;
