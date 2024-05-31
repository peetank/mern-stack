import './App.css'
import Person from './components/Person'

function App() {
    const props = {
      name: "beetank",
      age: 21,
      email: "beetank@gmail.com",
      isMarried: true,
      friends: ["abhinav", "akash", "kushal", "om", "shoaib"]
    }

  return (
    <>
      <Person {...props}></Person>
    </>
  )
}

export default App
