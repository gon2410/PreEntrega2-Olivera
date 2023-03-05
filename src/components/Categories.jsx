import React from 'react'
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
    Button,
	} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';

const Categories = () => {
    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Categorias
                </MenuButton>
                <MenuList>
                    <MenuItem>Usados</MenuItem>
                    <MenuItem>Nuevos</MenuItem>
                    <MenuItem>Marcas</MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default Categories