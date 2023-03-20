import React from 'react'
import Item from './Item'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ItemList = ({data}) => {
    return (
        <>
            <Container>
                <Row>
                    {
                        data.map((auto, index) => {
                            return (
                                <Col key={index}>
                                    <Item id={auto.id} brand={auto.brand} name={auto.name} cat={auto.category} year={auto.year} km={auto.km} stock={auto.stock} image={auto.image} price={auto.price}></Item>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>

        </>

    )
}

export default ItemList