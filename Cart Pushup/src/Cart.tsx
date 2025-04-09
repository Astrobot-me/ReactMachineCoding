import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import { useCart } from './CartContext';
import CartCard from './CartCard';
import { useFetchedItems } from './ItemContext';

export default function Cart() {
    
    const {cartItems,getCartQuantity} = useCart(); 
    const { itemArray = [] } = useFetchedItems() || {};


    return( 
    <React.Fragment>

       
            <Container fluid className="m-4 p-4">
                
                <h1>Cart</h1>
                <p>This is the cart page</p>
                <p>Here you can view and manage the items in your cart.</p>
                <p>Checkout our amazing deals!</p>
                <hr />
                <h3 className='my-2 mb-5'>Total Items in the cart : {getCartQuantity}</h3>
                <Stack direction="horizontal" gap={3} className="flex-wrap">
               
                    {cartItems.length > 0 &&
                    cartItems.map((item,index) => {
                        const product = itemArray.find(product => product.id === item.id )
                        const newItem = { 
                            title:product?.title || "" , 
                            price:product?.price || 0, 
                            thumbnail : product?.thumbnail || "",
                            index: index 
                        } 
                        
                        return (
                            
                           <CartCard {...newItem} {...item} ></CartCard>
                        
                        );
                    })}
               
            </Stack>

            <Stack> 
                <hr />
                <div className='d-flex flex-row justify-content-between '>
                    <h1 className='' style={{ width: "3rem"}}>Total</h1>
                    <h2> { 
                         cartItems.reduce((total, item) => {
                            const product = itemArray.find(product => product.id === item.id);
                            return total + (product?.price || 0) * item.quantity;
                         }, 0).toPrecision(4)
                        }
                        
                        
                         $</h2>
                </div>
            </Stack>
            </Container>
      
    </React.Fragment>
    ) 
} 