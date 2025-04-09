import React from 'react';
import { Card, Badge, Button, Container, Row, Col } from 'react-bootstrap';
import { Product } from './types';
import { useCart } from './CartContext';

const ProductCard: React.FC<Product> = ({ id, title, description, price, rating, stock, thumbnail, tags, discountPercentage }) => {
    
    const {increaseCartCount , decreaseCartCount, removeFromCart, getItemQuantity} = useCart(); 
    const quantity = getItemQuantity(id); 
    
    
    return (
        <Container fluid className="my-3">
            <Card className="shadow-lg">
                <Row className="g-0">
                <Col md={3} className="d-flex align-items-center justify-content-center p-3">
                    <Card.Img 
                    src={thumbnail} 
                    alt={title} 
                    className="img-fluid rounded" 
                    style={{ maxHeight: '200px', objectFit: 'contain' }}
                    />
                </Col>
                <Col md={9}>
                    <Card.Body className="d-flex flex-column h-100">
                    <div className="d-flex justify-content-between align-items-start">
                        <div>
                        <Card.Title className="fs-4 mb-1">{title}</Card.Title>
                        <Card.Subtitle className="text-muted mb-2">ID: {id}</Card.Subtitle>
                        </div>
                        <div className="text-end">
                        <div className="d-flex align-items-center mb-1">
                            <span className="fs-5 fw-bold me-2">${price.toFixed(2)}</span>
                            {discountPercentage > 0 && (
                            <Badge bg="danger" className="me-2">{discountPercentage}% OFF</Badge>
                            )}
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="me-2">{rating} ⭐</span>
                            <Badge bg={stock > 0 ? "success" : "danger"}>
                            {stock > 0 ? `${stock} in stock` : 'Out of stock'}
                            </Badge>
                        </div>
                        </div>
                    </div>
                    
                    <Card.Text className="my-3">{description}</Card.Text>
                    
                    <div className="mb-3">
                        {tags && tags.map((tag, index) => (
                        <Badge key={index} bg="secondary" className="me-1 mb-1">
                            {tag}
                        </Badge>
                        ))}
                    </div>
                    
                    <div className="mt-auto text-end">
                        {
                            quantity > 0 ? (
                                <div className='d-flex gap-4 flex-column'>
                                    <div className='d-flex gap-3 justify-content-start align-items-center '> 
                                        <Button
                                        onClick={()=> {
                                            decreaseCartCount(id)
                                        }}
                                        > - </Button>
                                        <p>Quantity : <span> {quantity} </span></p>
                                        <Button
                                         onClick={()=> {
                                            increaseCartCount(id)
                                            
                                        }}
                                        > + </Button>
                                    </div> 
                                    <Button className='btn-danger p-2 px-2' 
                                     onClick={()=>{
                                        removeFromCart(id)
                                    }}
                                    > Remove </Button>

                                </div>
                            ) : (
                                <Button variant="primary" size="lg" disabled={stock === 0}
                                onClick={()=>{
                                    increaseCartCount(id)
                                }}
                                >
                                {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                                </Button>
                            )
                        }
                    </div>
                    </Card.Body>
                </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default ProductCard;