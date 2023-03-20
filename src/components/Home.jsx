import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Home = ({greeting}) => {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h1>{greeting}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Magni a quo cum explicabo laudantium. Quae aut,
                            praesentium nulla ex necessitatibus autem ut fugit,
                            natus dolor, similique odit error quas tempore.</p>
                    </Col>
                    <Col>
                        <img src="../src/assets/Volkswagen_Amarok_Azul.png" alt="" width={400}/>
                    </Col>
                </Row>


            </Container>
        </>
    )
}

export default Home