import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContext from "./context/CartContext";
import Cart from "./components/Cart";

const App = () => {

    return (
		<CartContext>
			<BrowserRouter>

			<NavBar/>

			<Routes>

				<Route exact path="/" element={ <Home greeting={"Bienvenido!"}/>}/>
				<Route exact path="/category/:category" element={ <ItemListContainer/> }/>
				<Route exact path="/item/:id" element={ <ItemDetailContainer/> }/>
				<Route exact path="/cart" element={ <Cart/> }/>

			</Routes>

			</BrowserRouter>
		</CartContext>
    )
}

export default App
