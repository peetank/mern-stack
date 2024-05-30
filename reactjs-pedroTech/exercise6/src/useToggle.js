// A hook is a fn that abstracts logic.
// Also we can nests hook inside a hook.
import { useState } from 'react'

export const useToggle = (initVal = false) => {
    const [state, setState] = useState(initVal);

    const toggle = () => {
        setState(!state);
    };

    return [state, toggle];
}