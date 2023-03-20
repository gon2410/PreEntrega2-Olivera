import React from 'react'
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = ({data}) => {
    const { category } = useParams();
    let arr = []

    for (let index = 0; index < data.length; index++) {
        const element = data[index].category;
        if (element == category) {
            arr.push(data[index])
        }
    }

    return (
        <>
            
            <Container fluid="sm" className="mt-5">
                <h3 className="text-capitalize">Vehiculos {category}</h3>
                <hr/>
                <br/>
                <ItemList data={arr}/>
            </Container>
            
        </>
    )
}

export default ItemListContainer