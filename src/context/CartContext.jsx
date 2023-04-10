import React from 'react'
import { createContext, useState } from 'react'

export const CartListContext = createContext();

const CartContext = ({children}) => {
    const [cartList, setCartList] = useState([]);

    return (
        <CartListContext.Provider value={{ cartList, setCartList }}>
            {children}
        </CartListContext.Provider>
    )
}

export default CartContext
