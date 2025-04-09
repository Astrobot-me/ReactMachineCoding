import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';


interface CartCardProps { 
    id:number; 
    title:string; 
    price: number; 
    quantity: number; 
    thumbnail:string; 
    index:number; 
}


const CartCard = ({ id, title, price,quantity, thumbnail,index} : CartCardProps) : React.ReactNode=> { 
    
    return (
        <Container fluid className="my-3">
            <Card className="shadow-lg">
                <Row className="g-0">
                <Col md={3} className="d-flex align-items-center justify-content-center p-3">
                    <Card.Img 
                    src={thumbnail} 
                    alt={title} 
                    className="img-fluid rounded" 
                    style={{ maxHeight: '150px', objectFit: 'contain' }}
                    />
                </Col>
                <Col md={9}>
                    <Card.Body className="d-flex flex-column h-100">
                    <div className="d-flex justify-content-between align-items-start">
                        <div>
                        <Card.Title className="fs-4 mb-1">{title}</Card.Title>
                        <Card.Subtitle className="text-muted mb-2">ID: {id}</Card.Subtitle>
                        <Card.Subtitle className="text-muted mb-2">Quantity: {quantity}</Card.Subtitle>
                        </div>

                    </div>
                    <div className="mt-auto text-end">
                        <h5>Price</h5>
                        <input type="text" name="" value={` ${price } $`} id="" className='p-1 px-1' style={{ width: "100px"}} disabled/>
                        <h4>Amount</h4>
                        <input type="text" name="" value={` ${price*quantity } $`} id="" className='p-1 px-1'  style={{ width: "130px"}} disabled/>
                    </div>

                    <div style={{ position: "absolute", top:"0px", left:"0px", width:"40px"}} className='bg-info fs-4 fw-medium rounded-circle p-1 translate-middle d-flex justify-content-center align-content-center'>
                        {index +1}

                    </div>
                    </Card.Body>
                </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default CartCard;