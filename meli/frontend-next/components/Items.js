import React, { Component } from 'react';
import styled from 'styled-components';
import Item from './Item';

const ResultTitle = styled.h3`
    color: ${props => props.theme.grey};
    font-size: 14px;
    margin-top: 16px;
    margin-bottom: 16px;

`;

var data = {
    items: [
        {
            "id": "MLA619208970",
            "title": "Remera Lisa Algodón Jersey Peinado Premium",
            "price": {
                "currency": "ARS",
                "amount": 619,
                "decimals": 2
            },
            "picture": "http://http2.mlstatic.com/D_935701-MLA43747292279_102020-O.jpg",
            "condition": "new",
            "free_shipping": false
        },
        {
            "id": "MLA879446108",
            "title": "Pack Mayorista X10 Remera D Hombre Algodon Estampado S A Xxl",
            "price": {
                "currency": "ARS",
                "amount": 5405.5,
                "decimals": 2
            },
            "picture": "http://http2.mlstatic.com/D_779947-MLA43877796586_102020-O.jpg",
            "condition": "new",
            "free_shipping": true
        },
        {
            "id": "MLA817937175",
            "title": "Remeras Manga Corta Lisas Hombre Gimnasio No Termica",
            "price": {
                "currency": "ARS",
                "amount": 720,
                "decimals": 2
            },
            "picture": "http://http2.mlstatic.com/D_877114-MLA31355994256_072019-O.jpg",
            "condition": "new",
            "free_shipping": false
        }
    ]
};

const ItemsList = styled.div`
    max-width: 100%;
`;

class Items extends Component {
    render() {
        return (
            <div>
                <ResultTitle>Categoria &#62; Sub categoria &#62; Producto &#62; Especificacion  </ResultTitle>
                <ItemsList>{data.items.map(item => <Item item={item} key={item.id} />)}</ItemsList>
            </div>
        );
    }
}

export default Items;