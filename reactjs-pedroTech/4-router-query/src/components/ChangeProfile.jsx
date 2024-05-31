import React, {useState, useContext} from 'react'
import { AppContext } from '../App';

function ChangeProfile() {
    const [newUsername, setNewUsername] = useState("");
    const { setUsername } = useContext(AppContext);
  return (
    <div>
        {" "}
        <input onChange={event => {setNewUsername(event.target.value)}}/>
        <button onClick={() => { setUsername(newUsername) } }>Change Username</button>
    </div>
  )
}

export default ChangeProfile