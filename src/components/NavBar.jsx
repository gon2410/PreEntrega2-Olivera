import React from 'react'
import CartWidget from './CartWidget';
import Categories from './Categories';
import { Container, Box, Flex, Spacer } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <>  
            <Container maxW='1000px' bg='blue.600' padding={5} borderBottomRadius="md">
                <Flex>
                    <Box marginTop={2}>
                        <img src="../src/assets/coche.png" alt="" width={30}/>
                    </Box>

                    <Spacer/>

                    <Categories/>

                    <Spacer/>

                    <CartWidget/>
                </Flex>
            </Container>
        </>
    )
}

export default NavBar