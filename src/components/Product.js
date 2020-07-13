import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import Button from 'react-bootstrap/Button'
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
                increment(shoe) ;

        }else{
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
        <div className="product">
            <img src={shoe.img} alt={shoe.name} style={{width:'40vw', height:'30vw'}} />
            <h5 className=" product-name">{shoe.name} </h5>

            <Button  onClick={addthisProduct} variant="success">Add to cart</Button>{' '}
        </div>
    )
}

export default Product
