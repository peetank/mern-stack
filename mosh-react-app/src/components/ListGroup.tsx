// import { Fragment } from "react"; can be used by specifying Fragment

interface Props {
    items: string[];
    heading: string;
}

import { useState } from "react";

function ListGroup( {items, heading} : Props) {


    // Hook: Allows us to use builtin functions in React.
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // items = [];

    return (
        <>
            <h1> { heading } </h1>
            {items.length === 0 && <p>Nothing found!</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={item}
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        onClick={() => setSelectedIndex(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
