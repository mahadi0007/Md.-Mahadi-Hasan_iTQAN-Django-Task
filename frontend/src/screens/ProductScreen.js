import React, {useState, useEffect} from 'react'
import { Link, useParams  } from 'react-router-dom'
import { Row,Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
// import products from '../products'
import axios from 'axios'

 

function ProductScreen({}) {
    const { id } = useParams();
    // const product= products.find((p)=> p._id === Number(id))
    const [product, setProduct] = useState([])

    useEffect(()=>{
        async function fetchProduct(){ 
            // const {data}= await axios.get(`/api/products/${match.params.id}`)
            const {data}= await axios.get(`/api/products/${Number(id)}`)

            

            setProduct(data)
        }

        fetchProduct()

    },[])

    return (
        <div>
            {/* {product.name} */}
            <Link to='/' className='btn btn-dark my-3' style={{ backgroundColor: '#003b45'}}>&#129044;</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt= {product.category} fluid />
                    


                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                    
                            <b>Description:</b> {product.description}
                            
                        </ListGroup.Item>

                    </ListGroup>
                </Col>

                <Col md={3}>               
                            
                    <Button className='btn-block' type='button' style={{ backgroundColor: '#003b45', float:'right'}}>For More Products</Button>

                </Col>


            </Row>
        </div>
    )
}

export default ProductScreen
