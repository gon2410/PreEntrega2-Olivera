import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav';
import { CartListContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => { 
    const {cartList} = useContext(CartListContext);
    return (
        <>
            <Nav>
                <Link to="/cart" className="text-decoration-none">
                    <span className="material-symbols-outlined">shopping_cart</span>
                </Link>
            </Nav>
            <Nav>
                <Link to="/cart" className="text-decoration-none">
                    {cartList.length}
                </Link>
            </Nav>
        </>
    )
}

export default CartWidget