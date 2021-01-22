import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal} from 'styled-components';

 const theme = {
    yellow: '#FFE600',
    blue: '#3483FA',
    red: '#FF0000',
    black: '#333333',
    grey: '#999999',
    lightgrey: '#EEEEEE',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
    mediaWidth: '1300px'
 };

const StyledPage = styled.div`
    background: ${props => props.theme.lightgrey};
    color: ${props => props.theme.black};
    height: 100%;
`;

const Inner = styled.div`
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem 15%;
    height: 100%;
`;

injectGlobal`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2')
        format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html {
        box-sizing: border-box;
        font-size: 10px;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body{
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'radnika_next';
    }

    a {
        text-decoration: none;
        color: ${theme.black};
    }

`;

export default class Page extends Component {
    render(){
        return(
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header />
                    
                    <Inner>
                        {this.props.children}
                    </Inner>
                    
                </StyledPage>
            </ThemeProvider>
        )
    }
}