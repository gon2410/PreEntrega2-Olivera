import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <>
            <Nav className="me-auto">
                <NavDropdown style={{color: "white"}} title="Categorias" id="basic-nav-dropdown" >
                    <Link to="/category/nuevos" className="text-decoration-none">
                        <NavDropdown.Item href='/category/nuevos'>Vehiculos Nuevos</NavDropdown.Item>
                    </Link>
                    <Link to="/category/usados" className="text-decoration-none">
                        <NavDropdown.Item href='category/usados'>Vehiculos Usados</NavDropdown.Item>
                    </Link>
                </NavDropdown>
            </Nav>
        </>
    )
}

export default Categories