import React, {useContext} from "react";
import { AppContext } from "../App"; 

const Contacts = () => {
    const {username} = useContext(AppContext);
    return (
        <h1> Contacts Page. Username is: {username} </h1>
    )
}

export default Contacts;