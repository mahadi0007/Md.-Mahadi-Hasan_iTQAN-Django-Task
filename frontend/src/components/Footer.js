import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer style={{backgroundColor: '#003b45'}} >
            <Container >
                <Row>
                    <Col className='text-center text-white py-3'>Vegetable</Col>
                    <Col className='text-center text-white py-3'>Fruit</Col>
                    <Col className='text-center text-white py-3'>Beverage</Col>
                    <Col className='text-center text-white py-3'>Baby</Col>
                    <Col className='text-center text-white py-3'>Bread & Bakery</Col>
                </Row>
                <Row>
                    <Col className='text-center text-white py-3'>Copyright &copy; Eshop</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
