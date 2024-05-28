import React, {useContext} from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
    const {username} = useContext(AppContext);
    const {isPending, error, data, refetch} = useQuery({ 
        queryKey: ["cat"], 
        queryFn: async () => {
            const response = await axios.get("https://catfact.ninja/fact");
            return response.data;
        }
    });
    if (isPending) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div>
            <h1> Home Page. Username is: {username} </h1>
            <h3>{data?.fact}</h3>
            <button onClick={refetch}>Get New Fact</button>
        </div>
    )
}

export default Home;