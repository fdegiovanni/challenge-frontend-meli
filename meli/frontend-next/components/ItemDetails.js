import React, { Component } from 'react';
import Head from 'next/head';
import ResultTitle from './styles/ResultTitle';
import Detail from './styles/ItemDetailStyles';
import getItem from '../services/getItem';
import formatMoney from '../lib/formatMoney';

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        query: props.id,
        categories: [],
        item: [],
        money: ["$"]
    }
}

componentDidMount() {
  var categories = JSON.parse(localStorage.getItem('categories'));
  console.log(this);
    getItem(this.state.query).then(response => {
        console.log(response);
        const {item} = response;

        var money = formatMoney(item.price.amount, {style: 'currency', currency: item.price.currency, minimumFractionDigits: item.price.decimals})
        money = money.split(',');
        this.setState({ item, money, categories});
    })
}

  render() {
    const item = this.state.item;
    return (
      <div>
        <Head>
            <title>MeLi Challenge | {item.title} </title>
        </Head>
        <ResultTitle> {(this.state.categories !== undefined) ? this.state.categories.join(' > ') : 'Categorias'} </ResultTitle>
        <Detail>
          <div className="description">
            <img src={item.picture} alt={item.title} />
            <h1>Descripción del producto</h1>
            <p>{item.description}</p>
          </div>
          <div className="title">
              <span>{(item.condition === 'new') ? 'Nuevo' : ''} - {item.sold_quantity} vendidos</span>
              <h1>{item.title}</h1>
              <h2>{this.state.money[0]}<sup>{(this.state.money.length === 2) ? this.state.money[1] : ''}</sup></h2>

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