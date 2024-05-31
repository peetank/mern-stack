import { useState } from "react";

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country?: Country;
}

enum Country {
  India = "India",
  USA = "USA",
  Japan = "Japan"
}

function Person(props: Props) {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const handleClick = () => {
      setIsVisible(!isVisible);
    }
  return (
    <div>
      <button onClick={handleClick}>{isVisible  ? "Hide" : "Show"}</button>
      {
        isVisible && 
      <div>
        <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
        <h1>Age: {props.age}</h1>
        <h1>This person {props.isMarried ? "is" : "is not"} married.</h1>
        {props.friends.map((friend, key) => (
            <h1 key={key}>{friend}</h1>
        ))}
        <h1>Country: {props.country}</h1>
      </div>
      }
    </div>
  )
}

export { Person, Country };