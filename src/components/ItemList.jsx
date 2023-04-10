import React from 'react'
import Item from './Item'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ItemList = ({data}) => {
    return (
        <>
            <Row className="justify-content-center">
                {
                    data.map((auto, index) => {
                        return (
                            <Col key={index}>
                                <Item id={auto.id} brand={auto.brand} model={auto.model} image={auto.image} cat={auto.category} price={auto.price}></Item>
                            </Col>
                        )
                    })
                }
            </Row>
        </>

    )
}

export default ItemList