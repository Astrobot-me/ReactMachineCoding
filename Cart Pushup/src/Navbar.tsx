import React from 'react';
import { Navbar, Container, Badge, NavLink as NavbarLink } from 'react-bootstrap';
import { ShoppingCart, ShoppingBag } from 'lucide-react';
import { NavLink } from 'react-router';
import { useCart } from './CartContext';

const NavigationBar = ({ cartItemCount = 0 }) : React.ReactNode => {

  const { getCartQuantity } = useCart(); 

  cartItemCount = getCartQuantity;   

  return (
    <Navbar bg="dark" expand="lg"  fixed="top" className="shadow-sm py-2">
      <Container fluid>
        <Navbar.Brand  className="d-flex align-items-center">
          <NavbarLink as={NavLink} to="/" className="text-light text-decoration-none">
            <ShoppingBag size={28} className="me-2 text-light" />
            <span className="fw-bold text-light">ShopEase</span>
          </NavbarLink>
        </Navbar.Brand>

        <NavbarLink as={NavLink} to="items" className="text-light text-decoration-none  ">
          <span className="fs-10 text-white d-lg-inline">Items</span>
        </NavbarLink>

        <div className="position-relative">
         <NavbarLink as={NavLink} to="cart" className="text-light text-decoration-none"> 
            
            <ShoppingCart size={24} className="text-light" />
            {cartItemCount > 0 && (
              <Badge 
              bg="danger" 
              pill 
              className="position-absolute top-0 start-100 translate-middle"
              style={{ fontSize: '0.65rem' }}
              >
                {cartItemCount > 99 ? '99+' : cartItemCount}
              </Badge>
            )}
          </NavbarLink>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;