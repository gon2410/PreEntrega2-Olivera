import React from 'react'
import CartWidget from './CartWidget';
import Categories from './Categories';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>  
            <Navbar bg="light" expand="lg" className="shadow">
            <Container>
                <Link to="/">
                    <Navbar.Brand><img src="../src/assets/coche.png" width="50" alt="" /></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Categories/>
                    <CartWidget/>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default NavBar