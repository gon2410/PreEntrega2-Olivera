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
                        <p>A concesionaria de vehiculos donde solo vendemos vehiculos 
                            0km. Los vehiculos que vendemos son de tipo sedan, hatchbacks
                            y camionetas para uso particular. No vendemos utilitarios.
                        </p>
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