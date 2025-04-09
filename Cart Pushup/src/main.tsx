import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router"; 
import Items from './Items.tsx';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import Cart from './Cart.tsx';
import { CartProvider } from './CartContext.tsx';
import { ItemContextProvider } from './ItemContext.tsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"items", 
        element:<Items/>
      },
      {
        path:"cart",
        element:<Cart/>
      }
    ]
  }, 
  
  
])

const queryClient = new QueryClient(); 


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
      <ItemContextProvider>

        <RouterProvider router={router}/>
      </ItemContextProvider>
      </CartProvider>
    </QueryClientProvider>
  </StrictMode>,
)
