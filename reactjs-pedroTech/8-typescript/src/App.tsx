import './App.css'
import {Person, Country} from './components/Person'

function App() {
  const props = {
    name: "beetank",
    age: 9,
    email: "random@email.com",
    isMarried: false,
    country: Country.India,
    friends: ["akash", "kushal", "om", "shoaib"]
  }

  return (
    <>
      <Person {...props}></Person>
    </>
  )
}

export default App