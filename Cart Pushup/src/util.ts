// src/util.ts
import { useQuery} from "@tanstack/react-query"
import { ProductResponse } from "./types";

const BASE_URL = "https://dummyjson.com";


export const fetcherFn: any = async (): Promise<any> => { 

    const res = await fetch(`${BASE_URL}/products?limit=10`);
    return await res.json();
    
}


export default function useTanStackFetch() { 

    return useQuery<ProductResponse>({
        queryKey: ["products"],
        queryFn: fetcherFn,
        // staleTime: 1000 * 60 * 5, // 5 minutes
        // cacheTime: 1000 * 60 * 10, // 10 minutes
    })

}