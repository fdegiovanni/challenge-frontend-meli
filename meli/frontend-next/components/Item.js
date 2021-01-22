import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';


class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };


        // IMAGEN      precio icon
        //             titulo
        //             estado

  render() {
    const { item } = this.props;
    return (


      <ItemStyles>
           {item.picture && <img src={item.picture} alt={item.title} />}
            <div>
                <h1>{formatMoney(item.price.amount, {style: 'currency', currency: item.price.currency, minimumFractionDigits: item.price.decimals})}</h1>

            
                <p>{item.title}</p>
                <p>{(item.condition) ? 'Completo Único' : ''}</p>
            </div>
            <span>San Francisco</span>
        
      </ItemStyles>
    );
  }
}

export default Item;