import React, { Component } from 'react';
import styled from 'styled-components';
import { perPage } from '../config';
import getItems from '../services/getItems';
import Item from './Item';
import ResultTitle from './styles/ResultTitle';

const ItemsList = styled.div`
    max-width: 100%;
`;

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: props.search,
            categories: [],
            items: []
        }
    }

    componentDidMount() {
        localStorage.removeItem('categories');
        getItems(this.state.query).then(response => {
            console.log(response);
            const {categories, items} = response
            this.setState({ categories, items });
            localStorage.setItem('categories', JSON.stringify(categories));
        })
    }


    render() {
        return (
            <div>
                <ResultTitle> {this.state.categories.join(' > ')} </ResultTitle>
                <ItemsList categories={this.state.categories}>{this.state.items.slice(0, perPage).map(item => <Item item={item} key={item.id} />)}</ItemsList>
              
            </div>
        );
    }
}

export default Items;