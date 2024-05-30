import {useQuery} from "@tanstack/react-query"
import axios from "axios";

export const useGetCat = () => {
    const {isPending, error, data, refetch} = useQuery({ 
        queryKey: ["cat"], 
        queryFn: async () => {
            const response = await axios.get("https://catfact.ninja/fact");
            return response.data;
        }
    });

    const refetchData = () => {
        refetch()
        alert("Data Refetched!");
    }

    return {data, isPending, refetchData, error};
}