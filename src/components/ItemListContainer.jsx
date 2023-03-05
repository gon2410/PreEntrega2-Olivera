import React from 'react'
import { Container} from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <Container maxW='1000px' padding={5}>
                <h1>{greeting}</h1>
            </Container>
        </>
    )
}

export default ItemListContainer