import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [auto, setAuto] = useState([]);
	const [ loading, setLoading ] = useState(true);
    const location = useLocation()
    const { from } = location.state;

    useEffect(() => {
        const db = getFirestore();

        const oneItem = doc(db, "autos_" + from, id);

        getDoc(oneItem).then((snapshot) => {
            if (snapshot.exists()) {
                const docs = snapshot.data();
                setAuto(docs);
                setLoading(false)
            }
        })
    }, [])

    if (loading) {
        return (
            <>
                <Container className="mt-5">
                    <Row className="justify-content-center">
                        <Spinner animation="border"/>
                    </Row>
                </Container>
            </>
        )
    } else {
        return (
            <>
                <ItemDetail id={auto.id} brand={auto.brand} model={auto.model} image={auto.image} price={auto.price} stock={auto.stock} desc={auto.description} from={from}/>
            </>
        )
    }
}

export default ItemDetailContainer