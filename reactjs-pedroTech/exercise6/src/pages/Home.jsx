import React from 'react'
import { useToggle } from '../useToggle';

function Home() {
  const [isVisible, toggle] = useToggle();

  return (
    <>
        <div className="toggle-example">
            <button onClick={toggle}>
                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <h1> Hidden Text </h1>}
        </div>
    </>
  )
}

export default Home