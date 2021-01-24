import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { StyleSearch, Logo, Input } from './styles/SearchStyles';


class Search extends Component {
    //onKeyDown={(e) => something(e)
    state = {
        query: '',
        categories: [],
        items: []
    };

    handleChange = (e) => {
        const { name, type, value } = e.target;
        console.log({ name, type, value });
        const val = type === 'number' ? parseFloat(value) : value;
        this.setState({ [name]: val });
    }

    handleSubmit= (e) => {
        //stop the form from submitting
        e.preventDefault();
        console.log(this.state);
   
        //change to the result page
        Router.push({
            pathname: '/items',
            query: { search: this.state.query }
        });
    }

    handleReturn = (e) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            this.handleSubmit(e);
        }
    }

    render() {


        return (
            <StyleSearch>
                <Logo>
                    <Link href={{
                        pathname: '/'
                    }}>                        
                    <a><img src="../static/Logo_ML.png" alt="logo" /></a>
                
                    </Link>
                </Logo>
                
                <Input>
                    <form onSubmit={this.handleSubmit }>
                        <div className="input-group">
                            <div className="input-group-area">
                                <input type="text" name="query" placeholder="Nunca dejes de buscar" onChange={this.handleChange} /></div>
                            <button className="input-group-icon" type="submit"><img src="../static/ic_Search.png" /></button>
                        </div>
                    </form>

                </Input>
            </StyleSearch>
        )
    }
}

export default Search;