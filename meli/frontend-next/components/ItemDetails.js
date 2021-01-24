import React, { Component } from 'react';
import Head from 'next/head';
import ResultTitle from './styles/ResultTitle';
import Detail from './styles/ItemDetailStyles';
import getItem from '../services/getItem';


class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        query: props.id,
        categories: [],
        item: []
    }
}

componentDidMount() {
    getItem(this.state.query).then(response => {
        console.log(response);
        const {item} = response
        this.setState({ item });
    })
}

  render() {
    const item = this.state.item;
    return (
      <div>
        <Head>
            <title>MeLi Challenge | {item.title} </title>
        </Head>
        <ResultTitle>Categoria &#62; Sub categoria &#62; Producto &#62; Especificacion  </ResultTitle>
        <Detail>
          <div className="description">
            <img src={item.picture} alt={item.title} />
            <h1>Descripción del producto</h1>
            <p>{item.description}</p>
          </div>
          <div className="title">
              <span>{(item.condition === 'new') ? 'Nuevo' : ''} - {item.sold_quantity} vendidos</span>
              <h1>{item.title}</h1>
              <h2>$ 1.920<sup>00</sup></h2>

              <button onClick={(e) => {
                e.preventDefault();
                if(confirm('Are you sure to buy this product?')){
                  alert('This is the way.');
                }
              }} >Comprar</button>
          </div>
        </Detail>
      </div>


    );
  }
}

export default ItemDetails;