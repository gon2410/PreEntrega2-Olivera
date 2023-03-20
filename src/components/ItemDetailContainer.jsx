import React from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({data}) => {
    const {id} = useParams();

    let arr = []

    for (let index = 0; index < data.length; index++) {
        if (data[index].id == id) {
            arr.push(data[index])
        }
    }

    return (
        <>
            {
                arr.map((auto, index) => {
                    return (
                        <ItemDetail key={index} id={auto.id} brand={auto.brand} name={auto.name} cat={auto.category} year={auto.year} km={auto.km} stock={auto.stock} image={auto.image}/>
                    )
                })
            }
        </>
    )
}

export default ItemDetailContainer