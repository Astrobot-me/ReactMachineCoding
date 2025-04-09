import { createContext, useContext, useState,ReactNode } from "react"

export interface CartItem {
    id: number;
    quantity: number;
}

interface CartItemContext {

    increaseCartCount: (id: number) => void;
    decreaseCartCount: (id: number) => void;
    removeFromCart: (id: number) => void;
    getItemQuantity: (id: number) => number;
    clearCart: () => void;
    cartItems: CartItem[];
    getCartQuantity : number
}


const CartContext = createContext<CartItemContext>({} as CartItemContext);

export function useCart() {
    return useContext(CartContext);
}

type CartProviderInterface = { 
    children : ReactNode
}

export function CartProvider({ children }: CartProviderInterface) : ReactNode {

    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const increaseCartCount = (id: number) => {
        console.log("Cart Items" , cartItems);
        
        setCartItems(prevItem => {
            if (prevItem.find(item => item.id === id) == null) {
                return [...prevItem, { id, quantity: 1 }]
            } else {
                return prevItem.map(item => {
                    if (item.id === id) {
                        return { id, quantity: item.quantity + 1 }
                    } else {
                        return item;
                    }
                })
            }
        })

    }
    const decreaseCartCount = (id: number) => {
        setCartItems(prevItem => {
            if (prevItem.find(item => item.id === id)?.quantity === 1) {
                return prevItem.filter(item => item.id !== id)
            } else {
                return prevItem.map(item => {
                    if (item.id === id) {
                        return { id, quantity: item.quantity - 1 }
                    } else {
                        return item;
                    }
                })
            }
        })

    }

    const getItemQuantity = (id: number) : number => {
        const count = cartItems.find(item => item.id === id)
        if (count !== null) {
            return Number(count?.quantity);
        } else {
            return 0;
        }
    }

    const removeFromCart = (id: number) => {
        setCartItems(prevItems => {
            return prevItems.filter(item => item.id !== id)

        })
    }

    const clearCart = () => {
      setCartItems([])

    }
    const getCartQuantity = cartItems.reduce((accumulator, item) => accumulator + item.quantity,0)

    return (
    <CartContext.Provider value={{ increaseCartCount, decreaseCartCount, removeFromCart, getItemQuantity, clearCart, cartItems,getCartQuantity }}>
        {children}
    </CartContext.Provider>
    )
      
} 