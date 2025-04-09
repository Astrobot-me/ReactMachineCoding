import React from "react";
import {  Container, Stack } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { useFetchedItems } from "./ItemContext";


export default function Items(){
    
   // Might Return undefined hence fix this issue 
    const { itemArray = [] } = useFetchedItems() || {}; 

    return(

        <React.Fragment>
           <Container fluid className="m-4 p-4">
            <h1>Product Page</h1>
            <Stack direction="horizontal" gap={3} className="flex-wrap">
               
                    {itemArray.length > 0 &&
                    itemArray.map((item) => {
                        return (
                    
                            <ProductCard  key={item.id} {...item}>
                        
                            </ProductCard>
                        
                        );
                    })}
               
            </Stack>
           </Container>
        </React.Fragment>
    )
}