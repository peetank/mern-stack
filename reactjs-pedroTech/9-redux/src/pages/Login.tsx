import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const [newUsername, setNewUsername] = useState(""); 
  const username = useSelector((state: any) => state.user.value.username);
  return (
    <div>
        <h1>
            Login Page
        </h1>
        <input type="text" onChange={
            (event) => setNewUsername(event.target.value)
        }/>
        <button onClick={() => dispatch(login({ username: newUsername }))}>
            Login
        </button>
        <button onClick={() => dispatch(logout())}>
            Logout
        </button>
        <p className="username">{username}</p>
    </div>
  )
}

export default Login