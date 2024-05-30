import { useState } from "react";

export const useCounter = (initVal = 0) => {
    const [count, setCount] = useState(initVal);

    const addCount = () => {
        return setCount(prev => prev + 1)
    }

    const subCount = () => {
        return setCount(prev => prev - 1)
    }

    const resetCount = () => {
        return setCount(0)
    }

    return { count, addCount, subCount, resetCount };
}