import React, { useContext, useState } from 'react'
import { doc, collection, addDoc, setDoc, getFirestore } from 'firebase/firestore';

import { CartListContext } from '../context/CartContext';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Cart = () => {
    const { cartList, setCartList } = useContext(CartListContext);
    const [orderId, setOrderId] = useState(null);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    let total;
    const db = getFirestore();

    const handleSubmit = (e) => {
        e.preventDefault()

        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    }

    const order = {name, email, cartList};
    const ordersCollection = collection(db, "orden");


    function updateStock(it) {
		const db = getFirestore();
		const oneItem = doc(db, "autos_" + it.cat, it.id);
		setDoc(oneItem, { id: it.id, brand: it.brand, model: it.model, category: it.cat, image: it.image_url, price: it.price, description: it.desc, stock: it.quantity + (it.org_stock - it.quantity)});
	}


    if (cartList.length == 0) {
        return (
            <>
                <Container className="row mt-5 justify-content-center">
                    <h3>Carrito vacio!</h3>
                </Container>
            </>
        )
    } else {
        return (
            <>
                <Container className="mt-5">
                    <Row>
                        <Col>
                            {
                                cartList.map((item) => {
                                    total += item.price
                                    return (
                                        <>
                                            <Card key={item.id} style={{ width: '28rem' }} className="mb-2">
                                                <Row>
                                                    <Col>
                                                        <Card.Img variant="top" src={item.image_url} />
                                                    </Col>
                                                    <Col>
                                                        <Card.Body>
                                                            <Card.Text>{item.brand + " " + item.model} X{item.quantity}</Card.Text>
                                                            <Button onClick={() => {
                                                                setCartList(
                                                                    cartList.filter(it => it.model !== item.model)
                                                                );
                                                                updateStock(item);
                                                            }} className="btn-sm btn-light"><span class="material-symbols-outlined">delete</span></Button>
                                                        </Card.Body>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </>
                                    )
                                })
                            }
                        </Col>
                        <Col>
                            <Container className="border rounded p-2">
                                <Form onSubmit={handleSubmit}>

                                    <Form.Group className="mt-3">
                                        <Form.Control type="text" placeholder="Ingrese su nombre" onChange={(e) => setName(e.target.value)}></Form.Control>
                                    </Form.Group>

                                    <Form.Group className="mt-3">
                                        <Form.Control type="email" placeholder="Ingrese su direccion de e-mail" onChange={(e) => setEmail(e.target.value)}></Form.Control>
                                    </Form.Group>
                                    <p>Total: {total}</p>
                                    <Button className="mt-3" variant="primary" type="submit">Comprar</Button>
                                </Form>

                            </Container>
                        </Col>
                    </Row>
                    

                </Container>
            </>

        )
    }

}

export default Cart