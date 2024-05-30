import React from 'react'
import { useCounter } from '../useCounter'

function Counter() {
  const {count, addCount, subCount, resetCount } = useCounter();
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={addCount}>Increase</button>
        <button onClick={subCount}>Decrease</button>
        <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default Counter