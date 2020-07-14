import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


const Cart = () => {

    const { deleteProduct, cart, increment, decrement } = useContext(GlobalContext);

    return (
        <div style={{width:'100vw',height:'100vh'}}>
            <ListGroup style={{ textAlign: 'center' }}>
                {cart.map(product => (
                    <ListGroup.Item key={product.id}>

                        <img src={product.image} alt="shoe" width="100px" height="100px" className="img-thumbnail"></img>

                        <p style={{ display: 'inline' }} className='mx-2'>{product.text}</p>
                        <span className="badge badge-secondary">{product.quantity}</span>
                        <Button variant="outline-primary" className='mx-2' onClick={() => increment(product.id)}>+</Button>{' '}
                        <Button variant="outline-secondary" className='mx-2' onClick={() => decrement(product.id)} >-</Button>{' '}
                        <Button variant="outline-danger" className='mx-2' onClick={() => deleteProduct(product.id)}>X</Button>{' '}

                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default Cart



