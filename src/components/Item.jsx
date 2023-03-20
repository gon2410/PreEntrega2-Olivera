import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

const Item = ({id, brand, name, cat, year, km, stock, image}) => {
    return (
        <>
            <Link to={`/item/${id}`} className="text-decoration-none">
                <Card style={{ width: '18rem', height: "15rem" }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{brand}</Card.Subtitle>
                        <Card.Text>
                        </Card.Text>
                        {/* <Button className="btn btn-sm btn-success" variant="primary">Detalles</Button> */}
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default Item