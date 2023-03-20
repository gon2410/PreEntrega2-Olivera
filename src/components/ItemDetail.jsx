import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ItemDetail = ({id, brand, name, cat, year, km, stock, image}) => {

	const [count, setCount] = useState(1);

	function sumar() {
		if (count != stock) {
			setCount(count + 1)
		}
	}

	function restar() {
		if (count != 1) {
			setCount(count - 1)
		}
	}

	return (
		<>
			<Container className="border rounded mt-5 p-5">
				<Row>
					<Col className="text-center">
						<img src={image} alt="" width={450}/>
					</Col>
					<Col>
						<Row>
							<Col>
								<h4>{brand + ' ' + name}</h4>

								<p>Estado: {cat}</p>
								<p>Año: {year}</p>
								<p>Km: {km}</p>
								<p>Stock: {stock}</p>

								<button className="btn" onClick={restar}>-</button>
								<button className="btn">Agregar {count} </button>
								<button className="btn" onClick={sumar}>+</button>
							</Col>
							<Col>

							</Col>
						</Row>
					</Col>

				</Row>
			</Container>
		</>
	)
}

export default ItemDetail