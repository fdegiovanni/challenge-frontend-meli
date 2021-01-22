import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Search from './Search';

Router.onRouteChangeStart = () => {
    NProgress.start();
}
Router.onRouteChangeComplete = () => {
    NProgress.done();
}
Router.onRouteChangeError = () => {
    NProgress.done();
}

const StyleHeader = styled.header`

`;

const Header = () => (
    <StyleHeader>
        <Search />
    </StyleHeader>
)

export default Header;