import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Product( {product}) {
    return (
        <Card className='my-3 p-3 rounded'>       
            <Link to={`/product/${product._id}`}>
                <Card.Img src= {product.categoryImage} />

            </Link>
            <hr/>
            <Card.Body>
            <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
                <Card.Title as="h3" className='text-center'>
                    <strong><b>{product.category}</b></strong>
                 
                </Card.Title>
            </Link>
            </Card.Body>
        </Card>
    )
}

export default Product
