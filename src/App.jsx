import React, { useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Data from "./data.json"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";


const App = () => {

	const [autos, setAutos] = useState([])
	const getDatos = () => {
		return new Promise ((resolve, reject) => {
			if (Data.length === 0) {
				reject(new Error ("No hay datos"))
			}
			setTimeout(() => {
				resolve(Data);
			}, 1500)
		})
	}

	async function fetchingData() {
		try {
			const datos = await getDatos();
			setAutos(datos)
		} catch (err) {
			console.log(err);
		}
	}

	fetchingData();

    return (
		<BrowserRouter>

			<NavBar/>

			<Routes>

				<Route exact path="/" element={ <Home greeting={"Bienvenido!"}/>}/>
				<Route exact path="/category/:category" element={ <ItemListContainer data={autos}/> }/>
				<Route exact path="/item/:id" element={ <ItemDetailContainer data={autos}/> }/>

			</Routes>

		</BrowserRouter>
    )
}

export default App
