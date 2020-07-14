import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import shoes from './../shoes.json';
import './../App.css'

const Product = () => {

    const { slug } = useParams();
    const shoe = shoes[slug];

    const { cart, addProduct, increment } = useContext(GlobalContext);

    const addthisProduct = e => {
        e.preventDefault();

        if (cart.map(
            product => (product.id === shoe ? true : false))
            .includes(true)) {
            increment(shoe);

        } else {
            const newProduct = {
                id: shoe,
                text: shoe.name,
                image: shoe.img,
                quantity: 1
            }

            addProduct(newProduct)
        }


    }

    if (!shoe) {
        return <h2>Page not found</h2>
    }

    return (
        // <div className='container row'>

        // </div>

        <Container style={{marginTop:'5vh'}}>
            <Row>
                <Col>
                    <div className="product">
                        <img src={shoe.img} alt={shoe.name} style={{ width: '30vw', height: '30vw' }} />
                        <h5 className=" product-name">{shoe.name} </h5>

                        <Button onClick={addthisProduct} variant="success">Add to cart</Button>{' '}
                    </div>
                </Col>
                <Col style={{}}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Product
