import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <>
            <Nav className="me-auto">
                <NavDropdown style={{color: "white"}} title="Categorias" id="basic-nav-dropdown" >
                    <Link to="/category/hatchbacks" className="text-decoration-none">
                        <NavDropdown.Item href='/category/nuevos'>Hatchbacks</NavDropdown.Item>
                    </Link>
                    <Link to="/category/sedan" className="text-decoration-none">
                        <NavDropdown.Item href='category/usados'>Sedan</NavDropdown.Item>
                    </Link>
                    <Link to="/category/camionetas" className="text-decoration-none">
                        <NavDropdown.Item href='category/usados'>Camionetas</NavDropdown.Item>
                    </Link>
                </NavDropdown>
            </Nav>
        </>
    )
}

export default Categories