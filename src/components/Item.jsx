import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

const Item = ({id, brand, model, image, cat, price}) => {

    return (
        <>
            <Link to={`/item/${id}`} state={{ from: cat }} className="text-decoration-none">
                <Card style={{ width: '18rem', height: "17.5rem" }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        {/* <Card.Title>{model}</Card.Title> */}
                        <Card.Subtitle className="mb-2 text-muted">{brand + " " + model}</Card.Subtitle>
                        <Card.Text>
                            <span className="text-success">US${price}</span>
                        </Card.Text>
                        {/* <Button className="btn btn-sm btn-success" variant="primary">Detalles</Button> */}
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default Item