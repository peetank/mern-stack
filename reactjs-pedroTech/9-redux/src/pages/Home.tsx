import { useSelector } from "react-redux"

function Home() {
  const username = useSelector((state: any) => state.user.value.username);
  return (
    <div>
        <h1>Home</h1>
        <p className="username">{username}</p>
    </div>
  )
}

export default Home