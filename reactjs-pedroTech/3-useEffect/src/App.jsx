import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [fact, setFact] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [category, setCategory] = useState(null);
  const [excuse, setExcuse] = useState(null);

  const fetchFact = async () => {
    const response = await axios.get("https://catfact.ninja/fact"); 
    setFact(response.data.fact);
  }

  const fetchAge = async () => {
    const response = await axios.get(`https://api.agify.io/?name=${name}`);
    setAge(response.data.age);
  }

  const fetchExcuse = async () => {
    console.log(category);
    const response = await axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`);
    console.log(response);
    setExcuse(response.data[0].excuse);
  }
  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <>
      <div className="container">
        <button onClick={fetchFact} className="btn"> Get a Cat Fact </button>
        <p className="para"> {fact} </p>

        <input onChange={event => setName(event.target.value)} placeholder='e.g. Ganesh'/>
        <button onClick={fetchAge}>Get Your Age</button>
        <p>Age: {age}</p>


        <select onChange={event => setCategory(event.target.value)} defaultValue={"placeholder"}>
          <option value="placeholder" disabled className="opt" >--Select a category--</option>
          <option value="party" className="opt" selected>Party</option>
          <option value="family" className="opt">Family</option>
          <option value="office" className="opt">Office</option>
        </select>
        <button onClick={fetchExcuse}>Get Excuse</button>
        <p>
          {
            excuse ? `Excuse: ${excuse}` : "" 
          }
        </p>
      </div>
    </>
  )
}

export default App
