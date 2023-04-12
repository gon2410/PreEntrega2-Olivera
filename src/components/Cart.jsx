import React, { useContext, useEffect, useState } from 'react'
import { doc, collection, addDoc, setDoc, getFirestore } from 'firebase/firestore';

import { CartListContext } from '../context/CartContext';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert';



const Cart = () => {
    const { cartList, setCartList } = useContext(CartListContext);
    const [orderId, setOrderId] = useState(null);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);

    const db = getFirestore();

    const handleSubmit = (e) => {
        e.preventDefault()

        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    }

    const order = {name, email, cartList, totalPrice};
    const ordersCollection = collection(db, "orden");

    function updateStock(it) {
		const db = getFirestore();
		const oneItem = doc(db, "autos_" + it.cat, it.id);
		setDoc(oneItem, { id: it.id, brand: it.brand,
                        model: it.model, category: it.cat,
                        image: it.image_url, price: it.price,
                        description: it.desc,
                        stock: it.quantity + (it.org_stock - it.quantity)});
	}

    useEffect(() => {
        let total = 0;
        for (let i = 0; i < cartList.length; i++) {
            total += cartList[i].price * cartList[i].quantity;
        }
        setTotalPrice(total);
    }, [cartList])


    let items = ""
    for (let i = 0; i < cartList.length; i++) {
        items += cartList[i].brand + " " + cartList[i].model + "\n";
    }
    const total = "Nombre: " + name + '\n' + "Items: \n" + items + "\n" + "Total: US$" + totalPrice;

    if (cartList.length == 0) {
        return (
            <>
                <Container className="mt-5">
                    <Row className="text-center">
                        <span className="material-symbols-outlined text-muted">shopping_cart</span>
                        <p className="text-center">Carrito vacio!</p>
                    </Row>
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
                                                            }} className="btn-sm btn-light"><span className="material-symbols-outlined">delete</span></Button>
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
                                    
                                    <Button onClick={() => {
                                        setCartList([]);
                                        swal("Gracias por tu compra!", total, "success");}} className="btn-sm btn-success mt-3" variant="primary" type="submit">Finalizar compra</Button>
                                    <p className="text-success">Total: US${totalPrice}</p>
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