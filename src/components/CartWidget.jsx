import React from 'react'
import Nav from 'react-bootstrap/Nav';

const CartWidget = () => {
    return (
        <>
            <Nav>
                <span className="material-symbols-outlined">shopping_cart</span>
            </Nav>
            <Nav>
                0
            </Nav>
        </>
    )
}

export default CartWidget