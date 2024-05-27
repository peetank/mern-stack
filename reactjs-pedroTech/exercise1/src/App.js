import './App.css';
import { Planet } from './Components/Planet';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState("");
  const planets = [
    { "name": "Jupiter", "isGasPlanet": true},
    { "name": "Earth", "isGasPlanet": false},
    { "name": "Mars", "isGasPlanet": false},
    { "name": "Saturn", "isGasPlanet": true}
  ];

  const handleInputChange = (event) => {
    setInput(event.target.value);
    console.log(input);
  }

  return (
    <div className="App">
      { planets.map((planet, key) => {
        const name = planet.isGasPlanet ? planet.name : "";
        return <Planet name={name} key={key} />;
      })}

      <input type="text" onChange={handleInputChange}></input>
      {input}
    </div>
  );
}

export default App;
