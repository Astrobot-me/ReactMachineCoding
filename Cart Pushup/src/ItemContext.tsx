import {createContext, useContext, useEffect, useState} from 'react';
import { Product } from './types';
import useTanStackFetch from './util';

type ItemContexProp = { 
    setDataItems : (products : Product[]) => void; 
    itemArray : Product[] 
}
const ItemContext = createContext<ItemContexProp | undefined>(undefined);

type ItemContextProviderProp = { 
    children : React.ReactNode
} 

export function useFetchedItems() {
    return useContext(ItemContext || [])
}

export function ItemContextProvider({children} : ItemContextProviderProp) { 

    const [ itemArray, setItems ] = useState<Product[]>([]) ;
    
    const { data ,isFetching} = useTanStackFetch();

    useEffect(()=>{ 
        setItems(data?.products || [] as Product[])
    },[isFetching])

    const setDataItems = (products : Product[]) => { 
        // settter function to set items fetched of type Product[] 
        setItems(products)
    } 

    return ( 
        <ItemContext.Provider value={{itemArray,setDataItems}}> 
            {children}
        </ItemContext.Provider>
    )
}