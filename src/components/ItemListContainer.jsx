import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
    const { category } = useParams();
    const [ autos, setAutos ] = useState([]);
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const db = getFirestore();

        const itemCollection = collection(db, "autos_" + category);
        getDocs(itemCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data());
            setAutos(docs);
            setLoading(false);
        })
    }, [autos])

    if (loading) {
        return (
            <>
                <Container fluid="sm" className="mt-5">
                    <Spinner animation="border"/>
                </Container>
            </>
        )
    } else {
        return (
            <>
                <Container fluid="sm" className="mt-5">
                    <h3 className="text-capitalize">{category}</h3>
                    <hr/>
                    <br/>
                    <ItemList data={autos}/>
                </Container>
            </>
        )
    }


}

export default ItemListContainer